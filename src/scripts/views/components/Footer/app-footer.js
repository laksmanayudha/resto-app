import '../../../../styles/sass/footer.scss';
import Component from '../component';

class AppFooter extends Component {
  render() {
    this.innerHTML = `
    <footer class="app-footer">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/logos/cutlery-small.png">
        <img crossorigin="anonymous" src="./images/logos/cutlery-large.png" alt="brand image">
      </picture>
        Copyright © 2024 - Me'sResto Apps
    </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
export default AppFooter;
