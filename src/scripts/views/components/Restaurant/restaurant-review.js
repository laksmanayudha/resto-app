import Loader from '../../../utils/loader';
import Component from '../component';
import '../Review/review-list';

class RestaurantReview extends Component {
  constructor() {
    super();
    this.state = {
      review: { name: '', review: '' },
      reviews: [],
      validation: null,
      onReviewSubmit: async () => {},
    };
  }

  set reviews(reviews) {
    this.setState({ reviews });
  }

  set onReviewSubmit(onReviewSubmit) {
    this.setState({ onReviewSubmit });
  }

  render() {
    const { validation } = this.state;
    const { name, review } = this.state.review;

    this.innerHTML = `
    <section class="restaurant-detail-review">
      <h2 tabindex="0">Reviews</h2>
      <div class="review-wrapper">
        <form action="#" id="reviewForm">
          <ul id="validationContainer">
            ${validation ? `<li>${validation}</li>` : ''}
          </ul>
          <label for="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            placeholder="Your name here..."
            value="${name}"
          />
          <label for="reviewInput">Review</label>
          <textarea
            name="reviewInput"
            id="reviewInput"
            cols="20"
            rows="10"
            placeholder="Please write your review here..."
          >${review}</textarea>
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
    const reviewFormElement = this.querySelector('#reviewForm');
    reviewFormElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitReviewButton = this.querySelector('#submitReviewButton');
      const { startLoading, stopLoading } = Loader(submitReviewButton, 'Sending...');
      startLoading();
      await this._submitReview();
      stopLoading();
    });
  }

  async _submitReview() {
    const { name, review } = this._getReviewInputValue();
    try {
      const validation = this._validateReview({ name, review });
      if (validation.fail) throw new Error(validation.message);

      await this.state.onReviewSubmit({ name, review });

      this._clearValidation();
      this.setState({ review: { name: '', review: '' } });
    } catch (error) {
      this._showValidation(error.message);
      this.setState({ review: { name, review } });
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
