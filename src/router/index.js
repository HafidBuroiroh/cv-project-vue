import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/skill',
      name: 'skill',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkillView.vue')
    },
    {
      path: '/pengalaman',
      name: 'pengalaman',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PengalamanView.vue')
    }
  ]
})

export default router
