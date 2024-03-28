import Component from '../component';

class ReviewItem extends Component {
  constructor() {
    super();
    this.state = {
      review: {},
    };
  }

  set review(review) {
    this.setState({ review });
  }

  render() {
    const { name, review, date } = this.state.review;
    this.innerHTML = `
    <article class="review-item">
      <div class="review-author">
        <i class="fas fa-user-circle"></i>
        <strong class="review-author__name">${name}</strong>
      </div>
      <p class="review-content">${review}</p>
      <p class="review-date">${date}</p>
    </article>
    `;
  }
}

customElements.define('review-item', ReviewItem);
export default ReviewItem;
