import '../../../styles/sass/home.scss';
import '../components/Hero/hero';
import '../components/WhyUs/why-us';
import '../components/Restaurant/restaurant-catalogues';
import '../components/Skeleton/catalogue-skeleton';
import Component from '../components/component';
import RestaurantSource from '../../data/restaurant-source';
import ENDPOINT from '../../globals/api-endpoint';
import shouldLoading from '../../utils/should-loading';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  async effect() {
    const restaurants = await shouldLoading({
      todo: async () => {
        const results = await RestaurantSource.all();
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
}

customElements.define('home-page', HomePage);
export default HomePage;
