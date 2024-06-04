import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authMiddleware from '../authMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/categories/',
        name: 'categories',
        component: () => import('../views/Categories.vue'),
        meta: { requiresAuth: true, requiresRole: ['admin', 'vendor', 'user'] }
    },
    {
        path: '/restaurants/',
        name: 'restaurants',
        component: () => import('../views/Restaurant.vue'),
        meta: { requiresAuth: true, requiresRole: ['admin', 'vendor', 'user'] }
    },
    {
      path: '/restaurant/:id/',
      name: 'restaurantMenus',
      component: () => import('../views/Menus.vue'),
      meta: { requiresAuth: true, requiresRole: ['admin', 'vendor', 'user'] }
    },

    {
      path: '/restaurant/:id/menus',
      name: 'restaurantWithMenus',
      component: () => import('../views/RestaurantMenus.vue')
    },
  ]
})
router.beforeEach(authMiddleware);
export default router
