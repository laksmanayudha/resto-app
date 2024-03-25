import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/sass/style.scss';
import '../public/icons/css/all.min.css';
import './views/components/Navbar/app-bar';
import './views/components/Footer/app-footer';
import './views/components/Hero/hero';
import './views/components/WhyUs/why-us';
import './views/components/Restaurant/restaurant-catalogues';
// import data from "../public/data/DATA.json" with { type: 'json' };

const main = () => {
  const { restaurants } = { restaurants: [] };
  const restaurantCatalogues = document.querySelector('restaurant-catalogues');
  restaurantCatalogues.restaurants = restaurants.map((restaurant) => ({
    ...restaurant,
    picture: restaurant.pictureId,
  }));
};

document.addEventListener('DOMContentLoaded', () => {
  main();
});
