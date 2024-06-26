import Filler from '../../../utils/filler';
import Component from '../component';

class RestaurantOverview extends Component {
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
    const { restaurant = {} } = this.state;
    if (Filler.isEmpty(restaurant.id)) {
      this.innerHTML = `
      <section class="restaurant-detail-overview">
        No overview available
      </section>`;
      return;
    }

    const {
      name,
      description,
      city,
      address,
      picture,
      rating,
      reviewCount,
      categories = [],
    } = restaurant;

    this.innerHTML = `
    <section class="restaurant-detail-overview">
      <div class="restaurant-detail__hero">
        <img crossorigin="anonymous" src="${picture}" alt="restaurant image">
        <div class="restaurant-detail__rating" tabindex="0">
          <i class="fas fa-star"></i>
          <strong>${rating}/5</strong>
          <small>(${reviewCount} review)</small>
        </div>
      </div>
      <div class="restaurant-detail__general">
        <h2 class="restaurant-detail__name" tabindex="0">${name}</h2>
        <p class="restaurant-detail__city" tabindex="0"><i class="fas fa-building"></i> ${city}</p>
        <p class="restaurant-detail__address" tabindex="0"><i class="fas fa-map-pin"></i> ${address}</p>
        <div class="restaurant-detail__description">
          <h3>Description</h3>
          <p tabindex="0">${description}</p>
        </div>
        <div class="restaurant-detail__category">
          <ul class="category-list">
            ${categories.map((category) => `<li class="category-item" tabindex="0">${category.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('restaurant-overview', RestaurantOverview);
export default RestaurantOverview;
