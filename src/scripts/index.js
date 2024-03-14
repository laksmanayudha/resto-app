import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/sass/style.scss';
import '../public/icons/css/all.min.css';
import './components/Navbar/app-bar';
import './components/Footer/app-footer';
import './components/Hero/hero';
import './components/WhyUs/why-us';
import './components/Restaurant/restaurant-catalogues';
import data from "../public/data/DATA.json" with { type: 'json' };

const main = () => {
    const { restaurants } = data;
    const restaurantCatalogues = document.querySelector('restaurant-catalogues');
    restaurantCatalogues.restaurants = restaurants.map((restaurant) => ({
        ...restaurant,
        picture: restaurant.pictureId
    }));
};

document.addEventListener('DOMContentLoaded', () => {
    main();
});