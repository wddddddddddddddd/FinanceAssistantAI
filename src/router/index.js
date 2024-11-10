import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path:'/index',
      component: NotFound
    }
  ],
})

export default router
