import Dashboard from './pages/dashboard.vue'
import Bookmarks from './pages/bookmarks.vue'
import NewsDetails from './pages/newsDetails.vue'

export const routes = [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: Bookmarks,
    },
    {
      path: '/news-details',
      name: 'news-details',
      component: NewsDetails,
    },
  ];