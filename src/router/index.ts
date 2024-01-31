import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: ['/connect'],
      name: 'connect',
      component: () => import('../views/ConnectView.vue')
    }
  ]
})

export default router
