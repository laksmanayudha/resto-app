import '../../../../styles/sass/navbar.scss';
import Component from '../component';

class AppBar extends Component {
  render() {
    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar-nav-backdrop"></div>
      <div class="app-bar-wrapper">
        <div class="app-bar-logo">
          <div class="app-bar-brand">
            <img src="./images/logos/cutlery.png" alt="brand image">
            <h1 class="app-bar-title">Me'sResto</h1>
          </div>
          <div class="app-bar-hamburger">
            <button type="button" id="toggleNavbarButton" aria-label="open navigation" title="open navigation">
                <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <nav class="app-bar-nav" id="appNavbar">
          <div class="app-bar-nav-close">
            <button type="button" aria-label="close navigation" title="close navigation" id="closeNavbarButton">
                <i class="fas fa-times"></i>
            </button>
          </div>
          <ul class="app-bar-nav-menu">
            <li class="app-bar-nav-item"><a href="/#">Home</a></li>
            <li class="app-bar-nav-item"><a href="/#/favorite">Favorite</a></li>
            <li class="app-bar-nav-item"><a href="https://www.linkedin.com/in/i-gede-laksmana-yudha-2b61801b9/" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>`;

    this._invokeEventListener();
  }

  _invokeEventListener() {
    const appNavbarBackdrop = this.querySelector('.app-bar-nav-backdrop');
    const appNavbar = this.querySelector('#appNavbar');
    const toggleNavbarButton = this.querySelector('#toggleNavbarButton');
    const closeNavbarButton = this.querySelector('#closeNavbarButton');

    toggleNavbarButton.addEventListener('click', (e) => {
      e.stopPropagation();
      appNavbar.classList.toggle('--navbar-open');
      appNavbarBackdrop.classList.toggle('--nav-backdrop-show');
    });

    closeNavbarButton.addEventListener('click', (e) => {
      e.stopPropagation();
      appNavbar.classList.remove('--navbar-open');
      appNavbarBackdrop.classList.remove('--nav-backdrop-show');
    });

    document.addEventListener('click', (e) => {
      if (e.target !== appNavbar && !appNavbar.contains(e.target)) {
        appNavbar.classList.remove('--navbar-open');
        appNavbarBackdrop.classList.remove('--nav-backdrop-show');
      }
    });
  }
}

customElements.define('app-bar', AppBar);
export default AppBar;
