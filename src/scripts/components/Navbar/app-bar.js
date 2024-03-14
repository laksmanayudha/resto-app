class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
        <header class="app-bar">
            <div class="app-bar-wrapper">
                <div class="app-bar-logo">
                <div class="app-bar-brand">
                    <img src="./images/logos/cutlery.png" alt="brand image">
                    <h1 class="app-bar-title">Me'sResto</h1>
                </div>
                <div class="app-bar-hamburger">
                    <button type="button" id="toggleNavbarButton" title="open navbar">
                    <i class="fas fa-bars"></i>
                    </button>
                </div>
                </div>
                <nav class="app-bar-nav" id="appNavbar">
                <div class="app-bar-nav-close">
                    <button type="button" aria-label="Close navbar" title="close navbar" id="closeNavbarButton">
                    <i class="fas fa-times"></i>
                    </button>
                </div>
                <ul class="app-bar-nav-menu">
                    <li class="app-bar-nav-item"><a href="/">Home</a></li>
                    <li class="app-bar-nav-item"><a href="#">Favorite</a></li>
                    <li class="app-bar-nav-item"><a href="https://www.linkedin.com/in/i-gede-laksmana-yudha-2b61801b9/">About Us</a></li>
                </ul>
                </nav>
            </div>
        </header>`;

        this.invokeEventListener();
    }

    invokeEventListener() {
        const appNavbar = this.querySelector('#appNavbar');
        const toggleNavbarButton = this.querySelector('#toggleNavbarButton');
        const closeNavbarButton = this.querySelector('#closeNavbarButton');

        toggleNavbarButton.addEventListener('click', (e) => {
            e.stopPropagation();
            appNavbar.classList.toggle('--navbar-open');
        });

        closeNavbarButton.addEventListener('click', (e) => {
            e.stopPropagation();
            appNavbar.classList.remove('--navbar-open');
        });

        document.addEventListener('click', (e) => {
            if(e.target != appNavbar && !appNavbar.contains(e.target))
            appNavbar.classList.remove('--navbar-open');
        });
    }
}

customElements.define('app-bar', AppBar);