import '../../../styles/sass/favorite.scss';
import '../../../styles/sass/skeleton.scss';
import '../components/Restaurant/restaurant-catalogues';
import '../components/Skeleton/catalogue-skeleton';
import '../components/Restaurant/restaurant-item';
import Component from '../components/component';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import ENDPOINT from '../../globals/api-endpoint';
import DummyRequest from '../../utils/dummy-request';

class FavoritePage extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  async effect() {
    const restaurants = await DummyRequest.send(async () => {
      const results = await FavoriteRestaurantIdb.all();
      return results;
    });
    this.setState({ restaurants });
  }

  render() {
    this.innerHTML = '<catalogue-skeleton></catalogue-skeleton>';
  }

  afterEffect() {
    this.innerHTML = `
    <section class="favorite-page">
      <h2>Favorite Restaurant</h2>
      <p>Discover restaurants you love and save them for search later.</p>
      <div class="favorite-list"></div>
    </section>
    `;

    const favoriteListElement = this.querySelector('.favorite-list');
    const { restaurants } = this.state;

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = {
          ...restaurant,
          picture: ENDPOINT.smallImage(restaurant.pictureId),
          detailUrl: `/#/detail/${restaurant.id}`,
        };
        favoriteListElement.appendChild(restaurantItemElement);
      });
    } else {
      favoriteListElement.innerHTML = `
      <p class="no-catalogue">No favorite restaurants have been added yet</p>
      <a class="no-catalogue" href="/#">Back to Home</a>
      `;
    }
  }
}

customElements.define('favorite-page', FavoritePage);
export default FavoritePage;
