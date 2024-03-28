import Component from '../component';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  render() {
    this.innerHTML = `
    <div class="review-list">
      <small>Total ${this.state.reviews.length} reviews</small>
      <div id="reviewItemContainer"></div>
    </div>
    `;
  }
}

customElements.define('review-list', ReviewList);
export default ReviewList;
