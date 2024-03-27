import '../../../styles/sass/home.scss';
import '../components/Hero/hero';
import '../components/WhyUs/why-us';
import '../components/Restaurant/restaurant-catalogues';
import '../components/Skeleton/catalogue-skeleton';
import Page from './page';
import RestaurantSource from '../../data/restaurant-source';
import ENDPOINT from '../../globals/api-endpoint';

class HomePage extends Page {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  async effect() {
    const restaurants = await RestaurantSource.all();
    this.setState({
      restaurants: restaurants.map((restaurant) => ({
        ...restaurant,
        picture: ENDPOINT.smallImage(restaurant.pictureId),
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
