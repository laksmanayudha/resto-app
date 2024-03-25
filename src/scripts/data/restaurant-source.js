import ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async fetchData(url, options = {}) {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static postOptions(data, options) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    };
  }

  static generateQuerySearchParams(params = {}) {
    const query = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      query.set(key, params[key]);
    });

    return query.toString();
  }

  static async all() {
    try {
      const json = await RestaurantSource.fetchData(ENDPOINT.LIST_RESTAURANT);
      if (json.error) throw new Error('Failed to get all restaurant');

      const { restaurants } = json;
      return restaurants;
    } catch (error) {
      return [];
    }
  }

  static async detail(id) {
    try {
      const json = await RestaurantSource.fetchData(ENDPOINT.detailRestaurant(id));
      if (json.error) throw new Error('Failed to get detail restaurant');

      const { restaurant } = json;
      return restaurant;
    } catch (error) {
      return null;
    }
  }

  static async search(keywords) {
    try {
      const searchQuery = RestaurantSource.generateQuerySearchParams({ q: keywords });
      const fullSearchUrl = `${ENDPOINT.SEARCH_RESTAURANT}?${searchQuery}`;
      const json = await RestaurantSource.fetchData(fullSearchUrl);
      if (json.error) throw new Error('Failed to get search restaurant');

      const { founded, restaurants } = json;
      return { founded, restaurants };
    } catch (error) {
      return { founded: 0, restaurants: [] };
    }
  }

  static async addReview({ id, name, review }) {
    try {
      const options = RestaurantSource.postOptions({ id, name, review });
      const json = await RestaurantSource.fetchData(ENDPOINT.ADD_REVIEW_RESTAURANT, options);
      if (json.error) throw new Error('Failed to add reveiw');

      const { customerReviews } = json;
      return customerReviews;
    } catch (error) {
      return [];
    }
  }
}

export default RestaurantSource;
