class CatalogueSkeleton extends HTMLElement {
  render() {
    this.innerHTML = `
    <section class="skeleton-container">
      <article class="skeleton-card">
          <header class="skeleton-card-header">
            <div class="skeleton-image"></div>
          </header>
          <div class="skeleton-card-body">
              <div class="skeleton-card-detail">
                  <h3 class="skeleton-text-header"></h3>
                  <p class="skeleton-text"></p>
                  <p class="skeleton-text"></p>
              </div>
              <div class="skeleton-card-action">
                  <div class="skeleton-button"></div>
              </div>
          </div>
      </article>
    </section>`;
  }
}

customElements.define('catalogue-skeleton', CatalogueSkeleton);
export default CatalogueSkeleton;
