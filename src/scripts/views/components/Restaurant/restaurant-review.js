import Component from '../component';
import '../Review/review-list';

class RestaurantReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  render() {
    this.innerHTML = `
    <section class="restaurant-detail-review">
      <h2>Reviews</h2>
      <div class="review-wrapper">
        <form action="#" id="reviewForm">
          <label for="reviewInput">Write a review</label>
          <textarea
            name="reviewInput"
            id="reviewInput"
            cols="20"
            rows="10"
            placeholder="Please write your review here..."
          ></textarea>
          <button type="submit">
            Send review
          </button>
        </form>
        <review-list></review-list>
      </div>
    </section>
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);
export default RestaurantReview;
