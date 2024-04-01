import Component from '../component';

class RestaurantMenu extends Component {
  constructor() {
    super();
    this.state = {
      menus: {
        foods: [],
        drinks: [],
      },
    };
  }

  set menus(menus) {
    this.setState({ menus });
  }

  render() {
    const { menus = {} } = this.state;
    const { foods = [], drinks = [] } = menus;
    this.innerHTML = `
    <section class="restaurant-detail-menu">
      <h2 tabindex="0">Our Menu</h2>
      <div class="menu-wrapper">
        <div class="menu-item">
          <div class="menu-item__badge"><small>${foods.length} foods</small></div>
          <h3 tabindex="0">
            <i class="fas fa-utensils"></i>
            <small>Our</small> Foods
          </h3>
          <ul>
            ${foods.map((food) => `
            <li>
              <i class="fas fa-circle-notch"></i>
              ${food.name}
            </li>
            `).join('')}
          </ul>
        </div>
        <div class="menu-item">
          <div class="menu-item__badge"><small>${drinks.length} drinks</small></div>
          <h3 tabindex="0">
            <i class="fas fa-glass-cheers"></i>
            <small>Our</small> Drinks
          </h3>
          <ul>
            ${drinks.map((drink) => `
            <li>
              <i class="fas fa-circle-notch"></i>
              ${drink.name}
            </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
export default RestaurantMenu;
