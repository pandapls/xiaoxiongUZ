import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/index',
    name: 'Index2',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
