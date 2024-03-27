import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../public/icons/css/all.min.css';
import App from './views/app';
import router from './routes/routes';
import '../styles/sass/detail.scss';

const app = new App({
  content: document.querySelector('#appMain'),
  router,
  serviceWorker: './sw-workbox.js',
});

app.init();
