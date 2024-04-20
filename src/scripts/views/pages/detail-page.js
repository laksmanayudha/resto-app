import '../../../styles/sass/detail.scss';
import '../components/Restaurant/restaurant-overview';
import '../components/Restaurant/restaurant-menu';
import '../components/Restaurant/restaurant-review';
import '../components/Skeleton/detail-skeleton';
import '../components/Favorite/favorite-button';
import Component from '../components/component';
import URLParser from '../../routes/url-parser';
import ENDPOINT from '../../globals/api-endpoint';
import shouldLoading from '../../utils/should-loading';
import Filler from '../../utils/filler';

class DetailPage extends Component {
  constructor({ resource }) {
    super();
    this._resource = resource;
    this.state = {
      restaurant: {},
    };
  }

  async effect() {
    // get restaurant datail
    const url = URLParser.parseActiveWithoutCombiner();
    const restaurant = await shouldLoading({
      todo: async () => {
        const results = await this._resource.restaurant.detail(url.id);
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
      const newReviews = await this._resource.restaurant.addReview({ id, name, review });
      restaurantReviewElement.reviews = newReviews.reverse();
    };

    // favorite button
    const favoriteButton = this.querySelector('favorite-button');
    favoriteButton.onFavoriteClick = async ({ isFavorite }) => {
      const newIsFavorite = await this._toggleLike({ isFavorite });
      favoriteButton.isFavorite = newIsFavorite;

      // tell if favorite button clicked
      this.dispatchEvent(new Event('on.favorite.clicked'));
    };

    // tell if the page ready
    this.dispatchEvent(new Event('on.detail.ready'));
  }

  async _isFavoriteRestaurant(restaurant = {}) {
    if (Filler.isEmpty(restaurant.id)) return false;
    const isExist = await this._resource.favorite.find(restaurant.id);
    return !!isExist;
  }

  async _toggleLike({ isFavorite }) {
    const { restaurant } = this.state;
    if (isFavorite) {
      await this._resource.favorite.put(restaurant);
    } else {
      await this._resource.favorite.delete(restaurant.id);
    }
    return isFavorite;
  }
}

customElements.define('detail-page', DetailPage);
export default DetailPage;
