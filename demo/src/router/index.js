import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: () => import ('../pages/demo.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import ('../pages/demo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // if (to.path === '/') {
  //   next({
  //     path: '/demo',
  //   })
  // } else {
  //   next();
  // }
  next();
})

export default router;