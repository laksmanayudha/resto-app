Feature('Add Restaurant to Favorite');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty message when no favorite restaurants available', ({ I }) => {
  I.seeElement('favorite-page');
  I.see('No favorite restaurants have been added yet', '.no-catalogue');
});

Scenario('add a restaurant to favorite list', async ({ I }) => {
  I.see('No favorite restaurants have been added yet', '.no-catalogue');

  // go to home
  I.amOnPage('/');
  I.waitForElement('restaurant-item', 10);

  const firstRestaurant = locate('restaurant-item').first();
  const seeDetailButton = firstRestaurant.find('.restaurant-action a');
  const restaurantNameHeading = firstRestaurant.find('.restaurant-detail h3');
  const firstRestaurantName = await I.grabTextFrom(restaurantNameHeading);

  // click first detail button
  I.see('See Detail', seeDetailButton);
  I.click(seeDetailButton);

  // click add to favorite
  I.seeElement('detail-page');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // go to favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  I.see(firstRestaurantName);
});
