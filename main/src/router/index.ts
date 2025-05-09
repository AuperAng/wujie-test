import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/L2',
      component: ()=> import('@/components/L2.vue')
    },
    {
      path: '/CM',
      component: () => import('@/components/CM.vue')
    },
    {
      path: '/ALL',
      component: ()=> import('@/components/ALL.vue')
    },
    {
      path: '/default',
      component: ()=> import('@/App.vue')
    }
  ]
})

export default router
