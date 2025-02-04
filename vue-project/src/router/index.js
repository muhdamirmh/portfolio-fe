import { createRouter, createWebHistory, RouterView } from 'vue-router'
import pfHome from '../views/pfHome.vue'

const defaultLocale = 'en'

const routes = [
  {
    path: '/:locale?', // <--- 2
    component: RouterView, // <--- 3
    children: [
      {
        path: '', // Matches the locale itself (e.g., /en)
        redirect: { name: 'Home' },
      },
      {
        path: 'home',
        name: 'Home',
        component: pfHome,
      },
    ],
  },
  {
    path: '/', // Redirect to default locale
    redirect: `/${defaultLocale}`, 
  },
  {
    path: '/home', // Redirect to default locale with 'home'
    redirect: `/${defaultLocale}/home`,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
