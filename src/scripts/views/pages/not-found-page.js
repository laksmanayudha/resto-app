import '../../../styles/sass/404.scss';
import Component from '../components/component';

class NotFoundPage extends Component {
  render() {
    this.innerHTML = `
    <div class="not-found-page">
      <h2>404 Page not Found</h2>
      <a href="/#">Back to Home</a>
    </div>
    `;
  }
}

customElements.define('not-found-page', NotFoundPage);
export default NotFoundPage;
