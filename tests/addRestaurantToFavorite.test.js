import DetailPage from '../src/scripts/views/pages/detail-page';

describe('Add Restaurant to Favorite', () => {
  const restaurantDetail = { id: 1 };

  beforeEach(() => {
    const restaurantResource = {
      detail: jest.fn().mockImplementation(() => restaurantDetail),
      addReview: jest.fn(),
    };

    document.body.appendChild(new DetailPage({
      resource: {
        restaurant: restaurantResource,
      },
    }));
  });

  it('should show the add favorite button when the restaurant has not been liked before', () => {
    expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
  });

  it('should not show the remove favorite button when the movie has not been liked before', () => {
    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
  });
});
