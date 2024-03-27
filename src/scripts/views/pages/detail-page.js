import '../../../styles/sass/detail.scss';
import Component from '../components/component';

class DetailPage extends Component {
  render() {
    this.innerHTML = 'Detail Page';
  }
}

customElements.define('detail-page', DetailPage);
export default DetailPage;
