import Loader from '../../../utils/loader';
import Component from '../component';
import '../Review/review-list';

class RestaurantReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      validation: null,
    };
  }

  set reviews(reviews) {
    this.setState({ reviews });
  }

  render() {
    const { validation } = this.state;
    this.innerHTML = `
    <section class="restaurant-detail-review">
      <h2>Reviews</h2>
      <div class="review-wrapper">
        <form action="#" id="reviewForm">
          <ul id="validationContainer">
            ${validation ? `<li>${validation}</li>` : ''}
          </ul>
          <label for="nameInput">Name</label>
          <input type="text" id="nameInput" placeholder="Your name here..." />
          <label for="reviewInput">Review</label>
          <textarea
            name="reviewInput"
            id="reviewInput"
            cols="20"
            rows="10"
            placeholder="Please write your review here..."
          ></textarea>
          <button type="submit" id="submitReviewButton">
            <span>Send Review</span>
          </button>
        </form>
        <review-list></review-list>
      </div>
    </section>
    `;

    const reviewListElement = this.querySelector('review-list');
    reviewListElement.reviews = this.state.reviews;
    this._invokeEventListener();
  }

  _invokeEventListener() {
    const reviewFormElement = document.querySelector('#reviewForm');
    reviewFormElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitReviewButton = this.querySelector('#submitReviewButton');
      const { startLoading, stopLoading } = Loader(submitReviewButton, 'Sending...');
      startLoading();
      setTimeout(() => {
        this._sendReview();
        stopLoading();
      }, 2000);
    });
  }

  _sendReview() {
    try {
      const { name, review } = this._getReviewInputValue();
      const validation = this._validateReview({ name, review });
      if (validation.fail) throw new Error(validation.message);

      this._clearValidation();
    } catch (error) {
      this._showValidation(error.message);
    }
  }

  _validateReview({ name, review }) {
    try {
      if (!name) throw new Error('Name is required');
      if (!review) throw new Error('Review is required');
      return { fail: false, message: 'Validation Success' };
    } catch (error) {
      return { fail: true, message: error.message };
    }
  }

  _getReviewInputValue() {
    const userNameInput = this.querySelector('#nameInput');
    const reviewInput = this.querySelector('#reviewInput');

    return {
      name: userNameInput.value,
      review: reviewInput.value,
    };
  }

  _showValidation(message = []) {
    this.setState({ validation: message });
  }

  _clearValidation() {
    this.setState({ validation: null });
  }
}

customElements.define('restaurant-review', RestaurantReview);
export default RestaurantReview;
