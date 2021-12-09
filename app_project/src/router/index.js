import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/test',
    // alias:'/test',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    //匹配所有路径
    path: '/:w*',
    // name: '*',
    redirect: '/test'
  }
]
// const redirect = {
//   // 路由重定向
//   path: '/:w+',
//   name: '*',
//   redirect: '/home'
// };

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {

//   if (from.path == '/') {
//     next({to:'/test'})
//   } else {
//     next()
//   }
// })

export default router
