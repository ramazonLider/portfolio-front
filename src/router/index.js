import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '@/views/Projects.vue'
import Blogs from '@/views/Blogs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
  ]
})

export default router
