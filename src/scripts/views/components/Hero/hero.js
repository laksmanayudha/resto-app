import '../Restaurant/restaurant-search';
import Component from '../component';

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      onRestaurantSearch: async () => {},
    };
  }

  set onRestaurantSearch(onRestaurantSearch) {
    this.setState({ onRestaurantSearch });
  }

  render() {
    this.innerHTML = `
    <section class="hero">  
      <figure>
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
          <source media="(max-width: 1080px)" srcset="./images/heros/hero-image_4-medium.jpg">
          <img crossorigin="anonymous" class="hero__image" src="./images/heros/hero-image_4-large.jpg" alt="welcome image">
        </picture>
        <figcaption>
            <div class="hero-content">
              <h2 tabindex="0">Explore Our Restaurant Catalogue Today!</h2>
              <p tabindex="0">Me'sResto is a journey through flavors,</p>
              <p tabindex="0">Each dish tells a delicious story of culinary craftsmanship.</p>
            </div>
            <restaurant-search></restaurant-search>
        </figcaption>
      </figure>
    </section>`;

    this._invokeEventListener();
  }

  _invokeEventListener() {
    const restaurantSearch = this.querySelector('restaurant-search');
    restaurantSearch.onSearch = this.state.onRestaurantSearch;
  }
}

customElements.define('app-hero', Hero);
export default Hero;
