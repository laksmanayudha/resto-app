import '../../../styles/sass/home.scss';
import '../components/Hero/hero';
import '../components/WhyUs/why-us';
import '../components/Restaurant/restaurant-catalogues';
import '../components/Skeleton/catalogue-skeleton';
import ENDPOINT from '../../globals/api-endpoint';
import shouldLoading from '../../utils/should-loading';
import Page from './page';

class HomePage extends Page {
  constructor({ resource }) {
    super({ resource });
    this.state = {
      restaurants: [],
    };
  }

  async effect() {
    const restaurants = await shouldLoading({
      todo: async () => {
        const results = await this._resource.restaurant.all();
        return results;
      },
      loading: () => {
        const catalogueContainer = this.querySelector('#catalogueContainer');
        const catalogueSkeleton = document.createElement('catalogue-skeleton');
        catalogueContainer.innerHTML = '';
        catalogueContainer.appendChild(catalogueSkeleton);
      },
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
      <div class="home-page">
        <app-hero></app-hero>
        <div id="catalogueContainer"></div>
        <why-us></why-us>
      </dvi>
    `;

    this._invokeEventListener();
  }

  afterEffect() {
    const restoCatalogueElement = document.createElement('restaurant-catalogues');
    const { restaurants } = this.state;
    if (restaurants.length) {
      restoCatalogueElement.restaurants = restaurants;
    }

    const catalogueContainer = this.querySelector('#catalogueContainer');
    catalogueContainer.innerHTML = '';
    catalogueContainer.appendChild(restoCatalogueElement);
  }

  _invokeEventListener() {
    const appHero = this.querySelector('app-hero');
    appHero.onRestaurantSearch = async (keyword) => {
      const results = await this._resource.restaurant.search(keyword);
      return results;
    };
  }
}

customElements.define('home-page', HomePage);
export default HomePage;
