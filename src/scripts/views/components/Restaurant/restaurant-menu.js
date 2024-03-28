import Component from '../component';

class RestaurantMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu: {
        foods: [],
        drinks: [],
      },
    };
  }

  render() {
    const { menu: { foods, drinks } } = this.state;
    this.innerHTML = `
    <section class="restaurant-detail-menu">
      <h2>Our Menu</h2>
      <div class="menu-wrapper">
        <div class="menu-item">
          <div class="menu-item__badge"><small>${foods.length} foods</small></div>
          <h3>
            <i class="fas fa-utensils"></i>
            <small>Our</small> Foods
          </h3>
          <ul>
            ${foods.map((food) => `
            <li>
              <i class="fas fa-circle-notch"></i>
              ${food.name}
            </li>
            `)}
          </ul>
        </div>
        <div class="menu-item">
          <div class="menu-item__badge"><small>${drinks.length} drinks</small></div>
          <h3>
            <i class="fas fa-glass-cheers"></i>
            <small>Our</small> Drinks
          </h3>
          <ul>
            ${drinks.map((drink) => `
            <li>
              <i class="fas fa-circle-notch"></i>
              ${drink.name}
            </li>
            `)}
          </ul>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
export default RestaurantMenu;
