import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '@/views/AboutMe.vue'
import MyProject from '@/views/MyProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe,
    },
    {
      path: '/project',
      name: 'project',
      component: MyProject,
    }
  ],
})

export default router
