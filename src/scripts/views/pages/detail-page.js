import '../../../styles/sass/detail.scss';
import Component from '../components/component';
import '../components/Restaurant/restaurant-overview';
import '../components/Restaurant/restaurant-menu';
import '../components/Restaurant/restaurant-review';
import '../components/Skeleton/detail-skeleton';
import DummyRequest from '../../utils/dummy-request';
import RestaurantSource from '../../data/restaurant-source';
import URLParser from '../../routes/url-parser';
import ENDPOINT from '../../globals/api-endpoint';

class DetailPage extends Component {
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
    </div>
    `;

    const restaurantOverviewElement = this.querySelector('restaurant-overview');
    const restaurantMenuElement = this.querySelector('restaurant-menu');
    const restaurantReviewElement = this.querySelector('restaurant-review');

    const {
      id,
      address,
      city,
      rating,
      pictureId,
      name,
      menus,
      description,
      customerReviews,
      categories,
    } = this.state.restaurant;

    restaurantOverviewElement.restaurant = {
      id,
      address,
      city,
      rating,
      name,
      description,
      categories,
      picture: ENDPOINT.largeImage(pictureId),
    };
  }
}

customElements.define('detail-page', DetailPage);
export default DetailPage;
