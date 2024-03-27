import Component from '../components/component';

class NotFoundPage extends Component {
  render() {
    this.innerHTML = '<h1>404 Page not Found</h1>';
  }
}

customElements.define('not-found-page', NotFoundPage);
export default NotFoundPage;
