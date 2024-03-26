import HomePage from '../views/pages/HomePage';
import NotFoundPage from '../views/pages/NotFoundPage';

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
