import '../../../styles/sass/404.scss';
import Page from './page';

class NotFoundPage extends Page {
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
