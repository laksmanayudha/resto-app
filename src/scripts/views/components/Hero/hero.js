import '../Restaurant/restaurant-search';
import Component from '../component';

class Hero extends Component {
  render() {
    this.innerHTML = `
    <section class="hero">  
      <figure>
        <img crossorigin="anonymous" class="hero__image" src="./images/heros/hero-image_4.jpg" alt="welcome image">
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
  }
}

customElements.define('app-hero', Hero);
export default Hero;
