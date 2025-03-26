import { getToken } from '@/utils/token'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
  ],
})

router.beforeEach((to, _, next) => {
  if (to.name != 'login' && to.name != 'register' && !getToken()) {
    next({ name: 'login' })
  }
  if (to.name == 'login' && getToken()) next({ name: 'home' })
  else next()
})

export default router
