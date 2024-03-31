import './components/Navbar/app-bar';
import './components/Footer/app-footer';
import './components/Backdrop/app-backdrop';
import URLParser from '../routes/url-parser';
import serviceWorkerRegister from '../utils/sw-register';

class App {
  constructor({ content, router, serviceWorker }) {
    this._content = content;
    this._router = router;
    this._serviceWorker = serviceWorker;
  }

  init() {
    const appBackdrop = document.querySelector('app-backdrop');

    window.addEventListener('hashchange', () => {
      this._renderPage();
      appBackdrop.show = false;
    });

    window.addEventListener('load', async () => {
      this._renderPage();
      appBackdrop.show = false;
      await serviceWorkerRegister(this._serviceWorker);
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
