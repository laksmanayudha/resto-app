import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/sass/style.scss';
import '../public/icons/css/all.min.css';

const main = () => {
  const appNavbar = document.getElementById('appNavbar');
  const openNavbarButton = document.getElementById('toggleNavbarButton');
  const closeNavbarButton = document.getElementById('closeNavbarButton');

  openNavbarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    appNavbar.classList.toggle('--navbar-open');
  });

  closeNavbarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    appNavbar.classList.remove('--navbar-open');
  });

  document.addEventListener('click', (e) => {
    if(e.target != appNavbar && !appNavbar.contains(e.target))
      appNavbar.classList.remove('--navbar-open');
  });
}

main();