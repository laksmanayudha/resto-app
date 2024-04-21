import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../public/icons/css/all.min.css';
import App from './views/app';
import router from './routes/routes';

const app = new App({
  content: document.querySelector('#appMain'),
  router,
  serviceWorker: './sw.bundle.js',
});

app.init();
