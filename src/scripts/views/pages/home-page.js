import '../../../styles/sass/home.scss';
import '../components/Hero/hero';
import '../components/WhyUs/why-us';
import '../components/Restaurant/restaurant-catalogues';
import '../components/Skeleton/catalogue-skeleton';
import Component from '../components/component';
import RestaurantSource from '../../data/restaurant-source';
import ENDPOINT from '../../globals/api-endpoint';
import DummyRequest from '../../utils/dummy-request';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  async effect() {
    const restaurants = await DummyRequest.send(async () => {
      const results = await RestaurantSource.all();
      return results;
    });

    this.setState({
      restaurants: restaurants.map((restaurant) => ({
        ...restaurant,
        picture: ENDPOINT.smallImage(restaurant.pictureId),
        detailUrl: `/#/detail/${restaurant.id}`,
      })),
    });
  }

  render() {
    this.innerHTML = `
      <app-hero></app-hero>
      <catalogue-skeleton></catalogue-skeleton>
      <why-us></why-us>
    `;
  }

  afterEffect() {
    const restoCatalogueElement = document.createElement('restaurant-catalogues');
    const { restaurants } = this.state;
    if (restaurants.length) {
      restoCatalogueElement.restaurants = restaurants;
    }

    const catalogueSkeletonElement = this.querySelector('catalogue-skeleton');
    catalogueSkeletonElement.replaceWith(restoCatalogueElement);
  }
}

customElements.define('home-page', HomePage);
export default HomePage;
