import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { addFavoriteRestaurantIdb, createDetailPageWithRestaurant } from './helpers/testFactories';

describe('Remove Restaurant from Favorite', () => {
  const restaurantDetail = { id: 1 };

  beforeEach(() => {
    addFavoriteRestaurantIdb(restaurantDetail);
  });

  it('should show remove from favorite button when the restaurant has been added before', (done) => {
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', () => {
      expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
      done();
    });
  });

  it('should not show add to favorite button when the restaurant has been added before  ', (done) => {
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', () => {
      expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
      done();
    });
  });

  it('should be able to remove restaurant from favorite', (done) => {
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', () => {
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    });

    detailPage.addEventListener('on.favorite.clicked', async () => {
      const restaurants = await FavoriteRestaurantIdb.all();
      expect(restaurants).toEqual([]);
      done();
    });
  });

  it('should not throw error when user remove restaurant from favorite that has been removed before', (done) => {
    const detailPage = createDetailPageWithRestaurant(restaurantDetail);

    detailPage.addEventListener('on.detail.ready', async () => {
      await FavoriteRestaurantIdb.delete(restaurantDetail.id);
      document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    });

    detailPage.addEventListener('on.favorite.clicked', async () => {
      const restaurants = await FavoriteRestaurantIdb.all();
      expect(restaurants).toEqual([]);
      done();
    });
  });
});
