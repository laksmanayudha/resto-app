import Component from '../component';

class FavoriteButton extends Component {
  render() {
    this.innerHTML = `
    <button type="button" class="favorite" aria-label="add to favorite button">
      <!-- <i class="fas fa-heart"></i> -->
      <i class="far fa-heart"></i>
    </button>
    `;
  }
}

customElements.define('favorite-button', FavoriteButton);
export default Component;
