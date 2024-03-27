import '../../../../styles/sass/skeleton.scss';

class CatalogueSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="catalogue-skeleton-container mt-5">
      <div class="sk sk-heading sk-rounded">
        <div class="sk-fill"></div>
      </div>
      <div class="sk sk-text-short sk-rounded mt-1">
        <div class="sk-fill"></div>
      </div>
      <div class="sk-container catalogue-skeleton-list">
        <div class="sk-shadow p-1">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
            <div class="mt-1">
                <div class="sk sk-heading sk-rounded">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-button sk-rounded mt-3">
                  <div class="sk-fill"></div>
                </div>
            </div>
        </div>
        <div class="sk-shadow p-1">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
            <div class="mt-1">
                <div class="sk sk-heading sk-rounded">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-button sk-rounded mt-3">
                  <div class="sk-fill"></div>
                </div>
            </div>
        </div>
        <div class="sk-shadow p-1">
            <div class="sk sk-image sk-rounded">
              <div class="sk-fill"></div>
            </div>
            <div class="mt-1">
                <div class="sk sk-heading sk-rounded">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-text sk-rounded mt-1">
                  <div class="sk-fill"></div>
                </div>
                <div class="sk sk-button sk-rounded mt-3">
                  <div class="sk-fill"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('catalogue-skeleton', CatalogueSkeleton);
export default CatalogueSkeleton;
