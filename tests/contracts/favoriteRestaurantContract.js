const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.find(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.find(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.find(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if does not fave the correctu property', async () => {
    favoriteRestaurant.put({ someProperty: 'propValue' });
    expect(await favoriteRestaurant.all()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.all()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    await favoriteRestaurant.delete(1);

    expect(await favoriteRestaurant.all()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant event though the restaurant has not been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    await favoriteRestaurant.delete(4);

    expect(await favoriteRestaurant.all()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestaurantModel };
