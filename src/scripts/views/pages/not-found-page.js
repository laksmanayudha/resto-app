import Page from './page';

class NotFoundPage extends Page {
  render() {
    this.innerHTML = '<h1>404 Page not Found</h1>';
  }
}

customElements.define('not-found-page', NotFoundPage);
export default NotFoundPage;
