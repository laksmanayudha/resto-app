import './review-item';
import Component from '../component';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  set reviews(reviews) {
    this.setState({ reviews });
  }

  render() {
    this.innerHTML = `
    <div class="review-list">
      <small>Total ${this.state.reviews.length} reviews</small>
      <div id="reviewItemContainer"></div>
    </div>
    `;

    const { reviews } = this.state;
    const reviewItemContainerElement = this.querySelector('#reviewItemContainer');

    reviewItemContainerElement.innerHTML = '';
    if (!reviews.length) {
      reviewItemContainerElement.innerHTML = '<div class="no-review">No Review Available</div>';
      return;
    }

    reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      reviewItemContainerElement.appendChild(reviewItemElement);
    });
  }
}

customElements.define('review-list', ReviewList);
export default ReviewList;
