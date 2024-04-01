import Component from '../component';

class FavoriteButton extends Component {
  constructor() {
    super();
    this.state = {
      isFavorite: false,
      onFavoriteClick: async () => {},
    };
  }

  set isFavorite(isFavorite) {
    this.setState({ isFavorite });
  }

  set onFavoriteClick(onFavoriteClick) {
    this.setState({ onFavoriteClick });
  }

  render() {
    const { isFavorite } = this.state;
    this.innerHTML = `
    <button
      tabindex="0"
      type="button"
      class="favorite"
      aria-label="${isFavorite ? 'remove from favorite' : 'add to favorite'}"
      id="likeButton"
    >
      ${isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
    </button>
    `;

    this._invokeEventListener();
  }

  _invokeEventListener() {
    const likeButton = this.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      const { isFavorite, onFavoriteClick } = this.state;
      await onFavoriteClick({ isFavorite });
    });
  }
}

customElements.define('favorite-button', FavoriteButton);
export default Component;
