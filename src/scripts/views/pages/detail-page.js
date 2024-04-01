import '../../../styles/sass/detail.scss';
import '../components/Restaurant/restaurant-overview';
import '../components/Restaurant/restaurant-menu';
import '../components/Restaurant/restaurant-review';
import '../components/Skeleton/detail-skeleton';
import '../components/Favorite/favorite-button';
import Component from '../components/component';
import RestaurantSource from '../../data/restaurant-source';
import URLParser from '../../routes/url-parser';
import ENDPOINT from '../../globals/api-endpoint';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import shouldLoading from '../../utils/should-loading';
import Filler from '../../utils/filler';

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {},
    };
  }

  async effect() {
    // get restaurant datail
    const url = URLParser.parseActiveWithoutCombiner();
    const restaurant = await shouldLoading({
      todo: async () => {
        const results = await RestaurantSource.detail(url.id);
        return results;
      },
      loading: () => {
        const restaurantDetailPage = this.querySelector('.restaurant-detail-page');
        const detailSkeleton = document.createElement('detail-skeleton');
        restaurantDetailPage.innerHTML = '';
        restaurantDetailPage.appendChild(detailSkeleton);
      },
    });
    this.setState({ restaurant });
  }

  render() {
    this.innerHTML = '<div class="restaurant-detail-page"></div>';
  }

  async afterEffect() {
    this.innerHTML = `
    <div class="restaurant-detail-page">
      <restaurant-overview></restaurant-overview>
      <restaurant-menu></restaurant-menu>
      <restaurant-review></restaurant-review>
      <favorite-button></favorite-button>
    </div>
    `;

    const restaurantOverviewElement = this.querySelector('restaurant-overview');
    const restaurantMenuElement = this.querySelector('restaurant-menu');
    const restaurantReviewElement = this.querySelector('restaurant-review');
    const favoriteButton = this.querySelector('favorite-button');

    // restaurant overview
    const {
      id,
      address,
      city,
      rating,
      pictureId,
      name,
      menus,
      description,
      customerReviews = [],
      categories = [],
    } = this.state.restaurant;

    restaurantOverviewElement.restaurant = {
      id,
      address,
      city,
      rating,
      name,
      description,
      categories,
      reviewCount: customerReviews.length,
      picture: ENDPOINT.largeImage(pictureId),
    };

    // restaurant menu
    restaurantMenuElement.menus = menus;

    // restaurant review
    restaurantReviewElement.reviews = customerReviews.reverse();

    // favorite button
    favoriteButton.isFavorite = await this._isFavoriteRestaurant(this.state.restaurant);

    this._invokeEventListener();
  }

  _invokeEventListener() {
    // restaurant review
    const restaurantReviewElement = this.querySelector('restaurant-review');
    restaurantReviewElement.onReviewSubmit = async ({ name, review }) => {
      const { id } = this.state.restaurant;
      const newReviews = await RestaurantSource.addReview({ id, name, review });
      restaurantReviewElement.reviews = newReviews.reverse();
    };

    // favorite button
    const favoriteButton = this.querySelector('favorite-button');
    favoriteButton.onFavoriteClick = async () => {
      const isFavorite = await this._toggleLike();
      favoriteButton.isFavorite = isFavorite;
    };
  }

  async _isFavoriteRestaurant(restaurant) {
    if (Filler.isEmpty(restaurant)) return false;
    const isExist = await FavoriteRestaurantIdb.find(restaurant.id);
    return !!isExist;
  }

  async _toggleLike() {
    const { restaurant } = this.state;
    const isFavorite = await this._isFavoriteRestaurant(restaurant);
    if (isFavorite) {
      await FavoriteRestaurantIdb.delete(restaurant.id);
    } else {
      await FavoriteRestaurantIdb.put(restaurant);
    }
    return !isFavorite;
  }
}

customElements.define('detail-page', DetailPage);
export default DetailPage;
