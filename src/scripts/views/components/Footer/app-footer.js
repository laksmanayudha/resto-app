import '../../../../styles/sass/footer.scss';
import Component from '../component';

class AppFooter extends Component {
  render() {
    this.innerHTML = `
    <footer class="app-footer">
        <img crossorigin="anonymous" src="./images/logos/cutlery.png" alt="brand image">
        Copyright © 2024 - Me'sResto Apps
    </footer>`;
  }
}

customElements.define('app-footer', AppFooter);
export default AppFooter;
