import { createRouter, createWebHistory, RouterView } from 'vue-router'
import pfHome from '../views/pfHome.vue'
import pfAbout from '../views/pfAbout.vue'
import pfContact from '@/views/pfContact.vue'
import pfSkills from '@/views/pfSkills.vue'
import pfExperience from '@/views/pfExperience.vue'


const defaultLocale = localStorage.locale || 'en'

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
      {
        path: 'about',
        name: 'About',
        component: pfAbout,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: pfContact,
      },
      {
        path: 'skills',
        name: 'Skills',
        component: pfSkills,
      },
      {
        path: 'experience',
        name: 'Experience',
        component: pfExperience,
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
