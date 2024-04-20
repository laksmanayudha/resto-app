Feature('Remove Restaurant from Favorite');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('restaurant-item', 10);

  const firstRestaurant = locate('restaurant-item').first();
  const seeDetailButton = firstRestaurant.find('.restaurant-action a');
  const restaurantNameHeading = firstRestaurant.find('.restaurant-detail h3');
  const firstRestaurantName = await I.grabTextFrom(restaurantNameHeading);

  I.seeElement(seeDetailButton);
  I.click(seeDetailButton);

  I.waitForElement('detail-page', 10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see(firstRestaurantName);
});

Scenario('remove a restaurant from favorite list', async ({ I }) => {
  I.seeElement('restaurant-item');

  const firstRestaurant = locate('restaurant-item').first();
  const seeDetailButton = firstRestaurant.find('.restaurant-action a');
  const restaurantNameHeading = firstRestaurant.find('.restaurant-detail h3');
  const firstRestaurantName = await I.grabTextFrom(restaurantNameHeading);

  // go to detail
  I.seeElement(seeDetailButton);
  I.click(seeDetailButton);
  I.waitForElement('detail-page', 10);
  I.see(firstRestaurantName);

  // click remove restaurant
  const removeFromFavoriteButton = locate('#favoriteButton[aria-label="remove from favorite"]');
  I.seeElement(removeFromFavoriteButton);
  I.click(removeFromFavoriteButton);

  // see on favorite page that restaurant has been removed
  I.amOnPage('/#/favorite');
  I.dontSeeElement(firstRestaurant);
});
