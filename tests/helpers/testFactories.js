import DetailPage from '../../src/scripts/views/pages/detail-page';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createDetailPageWithRestaurant = (restaurant = {}) => {
  const restaurantResource = {
    detail: jest.fn().mockImplementation(() => restaurant),
    addReview: jest.fn(),
  };

  const detailPage = new DetailPage({
    resource: {
      restaurant: restaurantResource,
      favorite: FavoriteRestaurantIdb,
    },
  });

  document.body.innerHTML = '';
  document.body.appendChild(detailPage);

  return detailPage;
};

const resetFavoriteRestaurantIdb = async () => {
  (await FavoriteRestaurantIdb.all()).forEach(async (restaurant) => {
    await FavoriteRestaurantIdb.delete(restaurant.id);
  });
};

const addFavoriteRestaurantIdb = async (restaurant = {}) => {
  await FavoriteRestaurantIdb.put(restaurant);
  return restaurant;
};

export {
  createDetailPageWithRestaurant,
  resetFavoriteRestaurantIdb,
  addFavoriteRestaurantIdb,
};
