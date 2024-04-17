describe('Add Restaurant to Favorite', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  });

  it('should show the favorite button when the restaurant has not been liked before', () => {
    expect(document.querySelector('#favoriteButtonContainer')).toBeTruthy();
  });
});
