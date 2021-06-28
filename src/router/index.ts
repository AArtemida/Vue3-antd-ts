import { createRouter, createWebHashHistory, RouteRecordRaw  } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    meta: {
      title: 'Login',
      keepAlive: true
    },
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children:[{
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/Index.vue')
    }]
  }
]

const router = createRouter({
  // base: process.env.BASE_URL,
  history: createWebHashHistory(''),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})


export default router