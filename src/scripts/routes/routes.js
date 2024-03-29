import DetailPage from '../views/pages/detail-page';
import FavoritePage from '../views/pages/favorite-page';
import HomePage from '../views/pages/home-page';
import NotFoundPage from '../views/pages/not-found-page';

const router = {
  routes: {
    '/': HomePage,
    '/favorite': FavoritePage,
    '/detail/:id': DetailPage,
    notFound: NotFoundPage,
  },

  findPage(path) {
    const page = this.routes[path];
    return page || this.routes.notFound;
  },
};

export default router;
