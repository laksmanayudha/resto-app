import Component from '../component';

class RestaurantItem extends Component {
  constructor() {
    super();
    this.state = {
      restaurant: {},
    };
  }

  set restaurant(restaurant) {
    this.setState({ restaurant });
  }

  render() {
    const {
      id,
      name,
      description,
      picture,
      city,
      rating,
      detailUrl,
    } = this.state.restaurant;

    this.innerHTML = `
        <article class="restaurant-item" id="restaurant_item_${id}">
            <header class="restaurant-header">
                <h3 tabindex="0">
                    <i class="fas fa-map-marker-alt"></i> 
                    ${city}
                </h3>
                <img src="${picture}" alt="restaurant image">
            </header>
            <div class="restaurant-body">
                <div class="restaurant-detail">
                    <div class="restaurant-rating" tabindex="0">Rating: <i class="fas fa-star"></i> ${rating}</div>
                    <h3 tabindex="0">${name}</h3>
                    <p tabindex="0">${description}</p>
                </div>
                <div class="restaurant-action">
                    <a href="${detailUrl}">See Detail</a>
                </div>
            </div>
        </article>`;
  }
}

customElements.define('restaurant-item', RestaurantItem);
export default RestaurantItem;
