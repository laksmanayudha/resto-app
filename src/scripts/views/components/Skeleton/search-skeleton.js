import '../../../../styles/sass/skeleton.scss';
import Component from '../component';

class SearchSkeleton extends Component {
  render() {
    this.innerHTML = `
    <div class="search-item-skeleton sk-horizontal p-2">
      <div class="sk sk-img-avatar sk-rounded">
        <div class="sk-fill"></div>
      </div>
      <div class="sk-full">
        <div class="sk sk-heading sk-rounded mt-1">
          <div class="sk-fill"></div>
        </div>
        <div class="sk sk-text sk-rounded mt-1">
          <div class="sk-fill"></div>
        </div>
        <div class="sk sk-text sk-rounded mt-1">
          <div class="sk-fill"></div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('search-skeleton', SearchSkeleton);
export default SearchSkeleton;
