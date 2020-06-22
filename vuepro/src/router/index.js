import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index.vue'
import Mine from '../views/Mine/mine.vue'
import MyIndex from '../views/Mine/myindex.vue'
import Address from '../views/Mine/address.vue'
import Server from '../views/Mine/server.vue'
import Consult from '../views/Mine/consult.vue'
import Medio from '../views/Mine/medio.vue'
import Connection from '../views/Mine/connection.vue'
import Cooperate from '../views/Mine/cooperate.vue'
import Speak from '../views/Speak/speak.vue'

import Goodslist from '../views/goods/goodslist.vue'
import Detail from '../views/goods/detail.vue'
import Special from '../views/special/Special.vue'
import store from '../store/index.js'

import Login from '../views/loginRegister/Login.vue'
import Register from '../views/loginRegister/Register.vue'
import Shop from '../views/ShopC/shop.vue'
import Comfirm from '../views/ShopC/comfirm.vue'




Vue.use(VueRouter)

const routes = [{
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
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/shop',
		name: 'Shop',
		component: Shop,
		meta: {
			reqireAuth: true
		}
	},

	{
		path: '/mine',
		name: 'Mine',
		component: Mine
	}, {
		path: '/myindex',
		name: 'MyIndex',
		component: MyIndex
	},
	 {
		path: '/address',
		name: 'Address',
		component: Address
	}, {
		path: '/server',
		name: 'Server',
		component: Server
	},
	{
		path: '/consult',
		name: 'Consult',
		component: Consult
	},
	{
		path: '/medio',
		name: 'Medio',
		component: Medio
	},
	{
		path: '/connection',
		name: 'Connection',
		component: Connection
	},
	{
		path: '/cooperate',
		name: 'Cooperate',
		component: Cooperate
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
	}, {
		path: '/consult',
		name: 'Consult',
		component: Consult
	}, {
		path: '/medio',
		name: 'Medio',
		component: Medio
	}, {
		path: '/connection',
		name: 'Connection',
		component: Connection
	}, {
		path: '/cooperate',
		name: 'Cooperate',
		component: Cooperate
	}, {
		path: '/speak',
		name: 'Speak',
		component: Speak
	},{
		path: '/comfirm',
		name: 'comfirm',
		component: Comfirm
	},
	{
		path: '/detail',
		name: 'Detail',
		component: Detail
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	//	store.state.histroyPath2 = from.fullPath
	if(to.fullPath == "/index") {
		store.state.jug = true
		next()
	} else {
		
		store.state.jug = false
		
	}
	console.log(from.fullPath)
	store.state.histroyPath = from.fullPath
	if(to.meta.reqireAuth){
		if(JSON.parse(sessionStorage.getItem('username'))){
			next()
		}else{
			next({path:'/login'})
		}
	}else{
		next()
	}
	if(to.fullPath == "/login"){	
		if(JSON.parse(sessionStorage.getItem('username'))){
			
			next({
				path:from.fullPath
			})
		}else{
			next()
		}
	}

	next()
})
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};
export default router