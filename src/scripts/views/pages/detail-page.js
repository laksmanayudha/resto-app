import '../../../styles/sass/detail.scss';
import Component from '../components/component';
import '../components/Restaurant/restaurant-overview';
import '../components/Restaurant/restaurant-menu';
import '../components/Restaurant/restaurant-review';
import '../components/Skeleton/detail-skeleton';
import '../components/Favorite/favorite-button';
import DummyRequest from '../../utils/dummy-request';
import RestaurantSource from '../../data/restaurant-source';
import URLParser from '../../routes/url-parser';
import ENDPOINT from '../../globals/api-endpoint';

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {},
    };
  }

  async effect() {
    const url = URLParser.parseActiveWithoutCombiner();
    const restaurant = await DummyRequest.send(async () => {
      const result = RestaurantSource.detail(url.id);
      return result;
    });

    this.setState({ restaurant });
  }

  render() {
    this.innerHTML = '<detail-skeleton></detail-skeleton>';
  }

  afterEffect() {
    this.innerHTML = `
    <div class="restaurant-detail-container">
      <restaurant-overview></restaurant-overview>
      <restaurant-menu></restaurant-menu>
      <restaurant-review></restaurant-review>
      <favorite-button></favorite-button>
    </div>
    `;

    const restaurantOverviewElement = this.querySelector('restaurant-overview');
    const restaurantMenuElement = this.querySelector('restaurant-menu');
    const restaurantReviewElement = this.querySelector('restaurant-review');

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

    this._invokeEventListener();
  }

  _invokeEventListener() {
    const restaurantReviewElement = this.querySelector('restaurant-review');
    restaurantReviewElement.onReviewSubmit = async ({ name, review }) => {
      const { id } = this.state.restaurant;
      const newReviews = await DummyRequest.send(async () => {
        const results = await RestaurantSource.addReview({ id, name, review });
        return results;
      });
      restaurantReviewElement.reviews = newReviews.reverse();
    };
  }
}

customElements.define('detail-page', DetailPage);
export default DetailPage;
