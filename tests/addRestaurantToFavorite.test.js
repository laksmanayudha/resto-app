import DetailPage from '../src/scripts/views/pages/detail-page';

describe('Add Restaurant to Favorite', () => {
  beforeEach(() => {
    document.body.appendChild(new DetailPage());
  });

  it('should show the favorite button when the restaurant has not been liked before', () => {
    expect(document.querySelector('favorite-button')).toBeTruthy();
  });
});
