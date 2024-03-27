import Component from '../component';
import './restaurant-item';

class RestaurantCatalogues extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  set restaurants(restaurants) {
    this.setState({ restaurants });
  }

  render() {
    this.innerHTML = `
      <section class="restaurant">
          <div class="restaurant-wrapper">
              <h2 tabindex="0">Our Catalogues</h2>
              <p>Explore our top recommendation catalogues today!</p>
              <div class="restaurant-list"></div>
          </div>
      </section>`;

    this._fillItems(this.state.restaurants);
  }

  _fillItems(restaurants) {
    const restaurantListElement = this.querySelector('.restaurant-list');
    restaurantListElement.innerHTML = '';

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantItemElement = document.createElement('restaurant-item');
        restaurantItemElement.restaurant = restaurant;
        restaurantListElement.appendChild(restaurantItemElement);
      });
    } else {
      restaurantListElement.innerHTML = '<p class="no-catalogue">No catalogue avaialable.</p>';
    }
  }
}

customElements.define('restaurant-catalogues', RestaurantCatalogues);
export default RestaurantCatalogues;
