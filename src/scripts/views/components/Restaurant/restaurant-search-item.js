import Component from '../component';

class RestaurantSearchItem extends Component {
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
      name,
      city,
      description,
      picture,
      rating,
      detailUrl,
    } = this.state.restaurant;
    this.innerHTML = `
    <li class="search-item">
      <a href="${detailUrl}">
        <div class="search-item__image">
          <img src="${picture}" alt="restaurant image">
        </div>
        <div class="search-item__content">
          <h3>${name}</h3>
          <span>
            ${this._generateRatingIcons(rating)}
            ${rating}/5
            -
            ${city}
          </span>
          <p>${description}</p>
        </div>
      </a>
    </li>
    `;
  }

  _generateRatingIcons(rating) {
    let htmlRating = '';
    const ratingLength = Math.floor(rating);
    for (let index = 0; index < ratingLength; index += 1) {
      htmlRating += '<i class="fas fa-star"></i>';
    }
    return htmlRating;
  }
}

customElements.define('restaurant-search-item', RestaurantSearchItem);
export default RestaurantSearchItem;
