import { createRouter, createWebHistory } from 'vue-router'
import Maquetacion from '../components/Maquetacion.vue'
import Form from '../components/FormPerros.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Maquetacion,
    },
    {
      path: '/form',
      component: Form,
    }
  ],
})
