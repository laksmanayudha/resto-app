import '../../../../styles/sass/skeleton.scss';
import Component from '../component';

class DetailSkeleton extends Component {
  render() {
    this.innerHTML = `
    <section class="detail-skeleton-container sk-container">
      <div class="detail-overview-skeleton">
        <div class="detail-hero-skeleton">
            <div class="sk sk-image-lg sk-rounded">
              <div class="sk-fill"></div>
            </div>
        </div>
        <div class="detail-genaral-skeleton">
          <div class="sk sk-heading sk-rounded mt-2">
            <div class="sk-fill"></div>
          </div>
          <div class="sk sk-text sk-rounded mt-3">
            <div class="sk-fill"></div>
          </div>
          <div class="sk sk-text sk-rounded mt-1">
            <div class="sk-fill"></div>
          </div>
          <div class="sk sk-text sk-rounded mt-1">
            <div class="sk-fill"></div>
          </div>
          <div class="sk sk-text-short sk-rounded mt-1">
            <div class="sk-fill"></div>
          </div>
          <div class="sk sk-button sk-rounded mt-3">
            <div class="sk-fill"></div>
          </div>
        </div>
      </div>
      <div class="detail-menu-skeleton mt-4">
        <div class="sk sk-heading sk-rounded mt-2">
          <div class="sk-fill"></div>
        </div>
        <div class="detail-menu-list-skeleton mt-2">
          <div class="detail-menu-item-skeleton">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
          </div>
          <div class="detail-menu-item-skeleton">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-review-skeleton mt-4">
        <div class="sk sk-heading sk-rounded mt-2">
          <div class="sk-fill"></div>
        </div>
        <div class="detail-review-wrapper-skeleton mt-2">
          <div class="detail-review-form-skeleton">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
          </div>
          <div class="detail-review-list-skeleton">
            <div class="detail-review-item-skeleton">
              <div class="sk sk-heading sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text-short sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
            </div>
            <div class="detail-review-item-skeleton mt-3">
              <div class="sk sk-heading sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text-short sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
            </div>
            <div class="detail-review-item-skeleton mt-3">
              <div class="sk sk-heading sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
              <div class="sk sk-text-short sk-rounded mt-1">
                <div class="sk-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('detail-skeleton', DetailSkeleton);
export default DetailSkeleton;
