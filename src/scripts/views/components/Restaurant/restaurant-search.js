import '../../../../styles/sass/restaurant-search.scss';
import './restaurant-search-item';
import '../Skeleton/search-skeleton';
import Component from '../component';
import RestaurantSource from '../../../data/restaurant-source';
import ENDPOINT from '../../../globals/api-endpoint';
import debounce from '../../../utils/debounce';
import shouldLoading from '../../../utils/should-loading';

class RestaurantSearch extends Component {
  constructor() {
    super();
    this._searchRestaurant = this._searchRestaurant.bind(this);
  }

  render() {
    this.style.width = '100%';
    this.innerHTML = `
    <section class="search">
      <div class="search-wrapper">
        <div class="search-header">
          <form action="#" id="searchForm">
            <div class="input-group">
              <span class="input-group-prepend">
                <i class="fas fa-search"></i>
              </span>
              <input
                type="text"
                name="search"
                id="searchInput"
                placeholder="Find any restaurant by name, category, or menu"
                autocomplete="off"
              >
              <button class="input-group-append" type="reset" id="searchResetButton">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="search-body">
          <small class="search-found">No result found.</small>
          <ul class="search-list">
            <li class="no-result">Type any keyword to find...</li>
          </ul>
        </div>
      </div>
    </section>
    `;

    this._invokeEventListener();
  }

  _fillItems(restaurants) {
    const searchFound = this.querySelector('.search-found');
    const searchList = this.querySelector('.search-list');
    searchList.innerHTML = '';

    searchFound.innerText = `Total ${restaurants.length} results found.`;
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const searchItem = document.createElement('restaurant-search-item');
        searchItem.restaurant = {
          ...restaurant,
          picture: ENDPOINT.smallImage(restaurant.pictureId),
          detailUrl: `/#/detail/${restaurant.id}`,
        };
        searchList.appendChild(searchItem);
      });
    } else {
      searchList.innerHTML = '<li class="no-result">No matched result</li>';
    }

    const restaurantSearchItem = this.querySelectorAll('restaurant-search-item');
    restaurantSearchItem?.forEach((searchItem) => {
      searchItem.addEventListener('click', () => {
        this._hideSearchBody();
      });
    });
  }

  _invokeEventListener() {
    const appBackdrop = document.querySelector('app-backdrop');
    const searchInput = this.querySelector('#searchInput');
    const searchResetButton = this.querySelector('#searchResetButton');
    const debouncedSearchRestaurant = debounce({
      todo: this._searchRestaurant,
      preTodo: () => {
        const searchList = this.querySelector('.search-list');
        searchList.innerHTML = `
        <search-skeleton></search-skeleton>
        <search-skeleton></search-skeleton>
        <search-skeleton></search-skeleton>
        `;
      },
    });

    searchInput.addEventListener('click', () => {
      this._showSearchBody();
    });

    appBackdrop.addEventListener('click', () => {
      this._hideSearchBody();
    });

    searchResetButton.addEventListener('click', () => {
      this._fillItems([]);
      this._focusToInput();
    });

    searchInput.addEventListener('input', async (e) => {
      e.preventDefault();
      const keyword = searchInput.value.toLowerCase();
      if (keyword) debouncedSearchRestaurant(keyword);
      else this._fillItems([]);
    });
  }

  async _searchRestaurant(keyword) {
    const { restaurants } = await shouldLoading({
      todo: async () => {
        const results = await RestaurantSource.search(keyword);
        return results;
      },
      loading: () => {
        const searchList = this.querySelector('.search-list');
        searchList.innerHTML = `
        <search-skeleton></search-skeleton>
        <search-skeleton></search-skeleton>
        <search-skeleton></search-skeleton>
        `;
      },
    });
    this._fillItems(restaurants);
  }

  _showSearchBody() {
    const appBackdrop = document.querySelector('app-backdrop');
    const searchBody = this.querySelector('.search-body');
    searchBody.classList.add('--search-show');
    appBackdrop.show = true;
  }

  _hideSearchBody() {
    const appBackdrop = document.querySelector('app-backdrop');
    const searchBody = this.querySelector('.search-body');
    searchBody.classList.remove('--search-show');
    appBackdrop.show = false;
  }

  _focusToInput() {
    const searchInput = this.querySelector('#searchInput');
    searchInput.focus();
    const { value } = searchInput;
    searchInput.value = '';
    searchInput.value = value;
  }
}

customElements.define('restaurant-search', RestaurantSearch);
export default RestaurantSearch;
