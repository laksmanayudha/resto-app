import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { createDetailPageWithRestaurant, resetFavoriteRestaurantIdb } from './helpers/testFactories';

describe('Add Restaurant to Favorite', () => {
  beforeEach(async () => {
    await resetFavoriteRestaurantIdb();
  });

  it('should show the add favorite button when the restaurant has not been added before', (done) => {
    const detailPage = createDetailPageWithRestaurant({ id: 1 });
    detailPage.addEventListener('on.detail.ready', () => {
      expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
      done();
    });
  });

  it('should not show the remove favorite button when the restaurant has not been added before', (done) => {
    const detailPage = createDetailPageWithRestaurant({ id: 1 });
    detailPage.addEventListener('on.detail.ready', () => {
      expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
      done();
    });
  });

  it('should be able to add restaurant to favorite', (done) => {
    const restaurantDetail = { id: 1 };
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', () => {
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    });

    detailPage.addEventListener('on.favorite.clicked', async () => {
      const restaurant = await FavoriteRestaurantIdb.find(restaurantDetail.id);
      expect(restaurant).toEqual(restaurantDetail);
      done();
    });
  });

  it('should not add a restaurant again when its already added', (done) => {
    const restaurantDetail = { id: 1 };
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', async () => {
      await FavoriteRestaurantIdb.put(restaurantDetail);
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    });

    detailPage.addEventListener('on.favorite.clicked', async () => {
      const restaurants = await FavoriteRestaurantIdb.all();
      expect(restaurants).toEqual([restaurantDetail]);
      done();
    });
  });

  it('should not add restaurant when it has no id', (done) => {
    const restaurantDetail = {};
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', async () => {
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    });

    detailPage.addEventListener('on.favorite.clicked', async () => {
      const restaurants = await FavoriteRestaurantIdb.all();
      expect(restaurants).toEqual([]);
      done();
    });
  });
});
