import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Mine from '../views/Mine/mine.vue'
import Speak from '../views/Speak/speak.vue'


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
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/speak',
    name: 'Speak',
    component: Speak
  }
]

const router = new VueRouter({
  routes
})

export default router
