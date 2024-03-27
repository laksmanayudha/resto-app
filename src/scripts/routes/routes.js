import HomePage from '../views/pages/home-page';
import NotFoundPage from '../views/pages/not-found-page';

const router = {
  routes: {
    '/': HomePage,
    notFoundPage: NotFoundPage,
  },

  findPage(path) {
    const page = this.routes[path];
    return page || this.routes.notFoundPage;
  },
};

export default router;
