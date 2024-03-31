import './components/Navbar/app-bar';
import './components/Footer/app-footer';
import './components/Backdrop/app-backdrop';
import URLParser from '../routes/url-parser';

class App {
  constructor({ content, router, serviceWorker }) {
    this._content = content;
    this._router = router;
    this._serviceWorker = serviceWorker;
  }

  init() {
    window.addEventListener('hashchange', () => {
      this._renderPage();
    });

    window.addEventListener('load', () => {
      this._renderPage();
    });
  }

  _renderPage() {
    this._content.innerHTML = '';

    const url = URLParser.parseActiveWithCombiner();
    const Page = this._router.findPage(url);
    window.scrollTo({ top: 0 });
    this._content.appendChild(new Page());
  }
}

export default App;
