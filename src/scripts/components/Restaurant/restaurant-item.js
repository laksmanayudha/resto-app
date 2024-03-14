class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    get restaurant() {
        return this._restaurant || {};
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const {
            id,
            name,
            description,
            picture,
            city,
            rating
        } = this.restaurant;

        this.innerHTML = `
        <article class="restaurant-item" id="restaurant_item_${id}">
            <header class="restaurant-header">
                <h2 tabindex="0">${city}</h2>
                <img src="${picture}" alt="restaurant image">
            </header>
            <div class="restaurant-body">
                <div class="restaurant-detail">
                    <div class="restaurant-rating" tabindex="0">Rating: <i class="fas fa-star"></i> ${rating}</div>
                    <h2 tabindex="0">${name}</h2>
                    <p tabindex="0">${description}</p>
                </div>
                <div class="restaurant-action">
                    <a href="#">See Detail</a>
                </div>
            </div>
        </article>`;
    }
}

customElements.define('restaurant-item', RestaurantItem);