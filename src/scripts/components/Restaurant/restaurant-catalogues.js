import './restaurant-item';

class RestaurantCatalogues extends HTMLElement {
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    get restaurants() {
        return this._restaurants || [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="restaurant">
            <div class="restaurant-wrapper">
                <h2 tabindex="0">Our Catalogues</h2>
                <p>Explore our top recommendation catalogues today!</p>
                <div class="restaurant-list"></div>
            </div>
        </section>`;

        this.fillItems(this.restaurants);
    }

    fillItems(restaurants) {
        const restaurantListElement = this.querySelector('.restaurant-list');
        restaurantListElement.innerHTML = '';

        if (restaurants.length) {
            restaurants.forEach((restaurant) => {
                const restaurantItemElement = document.createElement('restaurant-item');
                restaurantItemElement.restaurant = restaurant;
                restaurantListElement.appendChild(restaurantItemElement);
            });
        } else {
            restaurantListElement.innerHTML = `<p class="no-catalogue">No catalogue avaialable.</p>`
        }
    }
}

customElements.define('restaurant-catalogues', RestaurantCatalogues);