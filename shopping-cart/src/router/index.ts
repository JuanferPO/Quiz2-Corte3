import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import DasboardPage from '../views/DasboardPage.vue'
import ModuloPage from '@/views/ModuloPage.vue';
import RolPage from '@/views/RolPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DasboardPage
  },{
    path: '/rol',
    name: 'Rol',
    component: RolPage
  },
  {
    path: '/modulo',
    name: 'Modulo',
    component: ModuloPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
