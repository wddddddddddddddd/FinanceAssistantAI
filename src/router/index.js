import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import NotFound from '../views/NotFound.vue'
import FinancialDashboard from '../views/FinancialDashboard.vue'
import Login from '../views/Login.vue'


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
    },
    {
      path: '/FinancialDashBoard',
      component: FinancialDashboard
    },
    {
      path: '/Login',
      component: Login
    }
  ],
})

export default router
