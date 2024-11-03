import Home from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/mymap',
      component: () => import('@/components/page/myMap.vue'),
    },
    {
      path: '/ajvform',
      component: () => import('@/components/page/ajvForm.vue'),
    },
    {
      path: '/highorder',
      component: () => import('@/components/page/HighOrder.vue'),
    },
    {
      path: '/formatcurrent',
      component: () => import('@/components/page/FormatCurrent.vue'),
    },
    {
      path: '/priceproducts',
      component: () => import('@/components/page/ProductPrice.vue'),
    },
    {
      path: '/json',
      component: () => import('@/components/page/Json.vue'),
    },
    {
      path: '/mathrandom',
      component: () => import('@/components/page/MathRandom.vue'),
    },
  ],
})

export default router
