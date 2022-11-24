import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/citaciones',
    name: 'citaciones',
    component: () => import('../views/CitacionesView.vue')
  },
  {
    path: '/licencia/:id',
    name: 'licencia',
    component: () => import('../components/Licencia.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
