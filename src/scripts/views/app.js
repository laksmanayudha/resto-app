import URLParser from '../routes/url-parser';

class App {
  constructor({ content, router, serviceWorker }) {
    this._content = content;
    this._router = router;
    this._serviceWorker = serviceWorker;
  }

  init() {
    window.addEventListener('hashchange', () => {
      this.renderPage();
    });

    window.addEventListener('load', () => {
      this.renderPage();
    });
  }

  renderPage() {
    this._content.innerHTML = '';

    const url = URLParser.parseActiveWithCombiner();
    const Page = this._router.findPage(url);
    this._content.appendChild(new Page());
  }
}

export default App;
