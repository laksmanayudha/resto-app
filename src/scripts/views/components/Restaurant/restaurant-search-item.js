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
      <a href="${detailUrl}" tabindex="0">
        <div class="search-item__image">
          <img crossorigin="anonymous" src="${picture}" alt="restaurant image">
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
    const fullRating = Math.floor(rating);

    // full rating
    for (let index = 0; index < fullRating; index += 1) {
      htmlRating += '<i class="fas fa-star"></i>';
    }

    // half rating
    const isHalfRating = (rating - fullRating) !== 0;
    if (isHalfRating) htmlRating += '<i class="fas fa-star-half-alt"></i>';

    // empty rating
    const emptyRating = Math.floor(5 - rating);
    for (let index = 0; index < emptyRating; index += 1) {
      htmlRating += '<i class="far fa-star"></i>';
    }

    return htmlRating;
  }
}

customElements.define('restaurant-search-item', RestaurantSearchItem);
export default RestaurantSearchItem;
