import Vue from 'vue'
import VueRouter from 'vue-router'
import myIndex from '../views/index/index.vue'
import Mine from '../views/Mine/mine.vue'
import Speak from '../views/Speak/speak.vue'
import Goodslist from '../views/goods/goodslist.vue'
import Special from '../views/special/Special.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: myIndex
  },
  {
    path: '/index',
    name: 'Index2',
    component: myIndex
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
  },
  {
    path: '/goodslist',
    name: 'goodslist',
    component: Goodslist
  },
  {
    path: '/special',
    name: 'Special',
    component: Special
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
//	store.state.histroyPath2 = from.fullPath
	if(to.fullPath == "/index"){	
		store.state.jug = true
			next()
	}else{
		store.state.jug = false
	}
	
	next()
})
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};
export default router
