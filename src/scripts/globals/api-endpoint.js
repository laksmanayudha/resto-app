import CONFIG from './config';

const ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.RESTAURANT_API_BASE_URL}/list`,
  ADD_REVIEW_RESTAURANT: `${CONFIG.RESTAURANT_API_BASE_URL}/review`,
  SEARCH_RESTAURANT: `${CONFIG.RESTAURANT_API_BASE_URL}/search`,

  detailRestaurant(id) {
    return `${CONFIG.RESTAURANT_API_BASE_URL}/detail/${id}`;
  },

  smallImage(id) {
    return `${CONFIG.RESTAURANT_SMALL_IMAGE_URL}/${id}`;
  },

  mediumImage(id) {
    return `${CONFIG.RESTAURANT_MEDIUM_IMAGE_URL}/${id}`;
  },

  largeImage(id) {
    return `${CONFIG.RESTAURANT_LARGE_IMAGE_URL}/${id}`;
  },
};

export default ENDPOINT;
