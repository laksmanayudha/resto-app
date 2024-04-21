Feature('Write Review to Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('restaurant-item', 10);

  const firstRestaurant = locate('restaurant-item').first();
  const seeDetailButton = firstRestaurant.find('.restaurant-action a');

  I.seeElement(seeDetailButton);
  I.click(seeDetailButton);
});

Scenario('show validation message when name and review field empty', ({ I }) => {
  I.waitForElement('detail-page', 10);
  I.seeElement('restaurant-review');

  I.seeElement('#nameInput');
  I.seeElement('#reviewInput');
  I.seeElement('#submitReviewButton');

  I.click('#submitReviewButton');
  I.see('Name is required', '#validationContainer');

  I.fillField('#nameInput', 'E2E User Tes');
  I.click('#submitReviewButton');
  I.see('Review is required', '#validationContainer');
});

Scenario('send a review to restaurant', async ({ I }) => {
  I.waitForElement('detail-page', 10);
  I.waitForElement('restaurant-review', 10);

  I.seeElement('#nameInput');
  I.seeElement('#reviewInput');
  I.seeElement('#submitReviewButton');

  const userName = `E2E User Tes ${+new Date()}`;
  const userReview = `Good place ${+new Date()}`;

  let firstReview = locate('review-item').first();
  let author = firstReview.find('.review-author');
  let review = firstReview.find('.review-content');
  I.dontSee(userName, author);
  I.dontSee(userReview, review);

  const numberOfReviews = await I.grabNumberOfVisibleElements('review-item');

  I.fillField('#nameInput', userName);
  I.fillField('#reviewInput', userReview);
  I.click('#submitReviewButton');

  I.waitNumberOfVisibleElements('review-item', numberOfReviews + 1, 10);
  firstReview = locate('review-item').first();
  author = firstReview.find('.review-author');
  review = firstReview.find('.review-content');
  I.see(userName, author);
  I.see(userReview, review);
});
