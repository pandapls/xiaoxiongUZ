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
import Login from '../views/login|register/Login.vue'
import Register from '../views/login|register/Register.vue'
import Shop from '../views/ShopC/shop.vue'



Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: Index
	}, {
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
		component: Shop
	},

	{
		path: '/mine',
		name: 'Mine',
		component: Mine
	}, {
		path: '/myindex',
		name: 'MyIndex',
		component: MyIndex
	}, {
		path: '/address',
		name: 'Address',
		component: Address
	}, {
		path: '/server',
		name: 'Server',
		component: Server
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
	}
]

const router = new VueRouter({
	routes
})

export default router