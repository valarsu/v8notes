import { createRouter, createWebHashHistory } from 'vue-router';
import Demo from '../pages/demo.vue';
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import ('../components/HelloWorld.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {
  // if (to.path === '/') {
  //   next({
  //     path: '/demo',
  //   })
  // } else {
  //   next();
  // }
// })

export default router;