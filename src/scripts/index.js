import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../public/icons/css/all.min.css';
import './views/components/Navbar/app-bar';
import './views/components/Footer/app-footer';
import App from './views/app';
import router from './routes/routes';

const app = new App({
  content: document.querySelector('#appMain'),
  router,
  serviceWorker: './sw-workbox.js',
});

app.init();
