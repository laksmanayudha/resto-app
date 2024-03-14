class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="hero">  
            <figure>
                <img src="./images/heros/hero-image_4.jpg" alt="welcome image">
                <figcaption>
                    <div class="hero-content">
                    <h1 tabindex="0">Explore Our Restaurant Catalogue Today!</h1>
                    <p tabindex="0">Me'sResto is a journey through flavors,</p>
                    <p tabindex="0">Each dish tells a delicious story of culinary craftsmanship.</p>
                    </div>
                </figcaption>
            </figure>
        </section>`;
    }
}

customElements.define('app-hero', Hero);