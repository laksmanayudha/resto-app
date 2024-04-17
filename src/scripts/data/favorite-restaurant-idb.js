import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const PRIMARY_KEY = 'id';
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: PRIMARY_KEY });
  },
});

const FavoriteRestaurantIdb = {
  async all() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async find(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async put(restaurant) {
    if (!Object.hasOwn(restaurant, PRIMARY_KEY)) return null;
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async delete(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
