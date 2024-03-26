class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="app-footer">
        Copyright © 2024 - Me'sResto Apps
    </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
export default AppFooter;
