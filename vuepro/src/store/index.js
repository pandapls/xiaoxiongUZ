import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	jug:false,
  	goodslistPath:'default',
  	saixuanPath:'moren',
  	data:[],
  	loginStatus:false,
  	headShow:false,
  	username:'',
  	histroyPath:'',
  	lihash:'',
  	goodDedetail:111,
  	shopData:[]
  },
  mutations: {
  	changeNav(state,curHash){
	  		if(curHash=='#/' ||curHash=='#/index'){
						state.jug = true
				}else{
						state.jug = false
				}
  	},
  	changeHead(state,curHash){
  		if(curHash =='#/login' ||curHash =='#/register'||curHash =='#/shop'||curHash =='#/comfirm'){
				state.headShow = false
			}else{
				state.headShow = true
			}
  	},
  	changGoodslsitPath(state,getPath){
  		state.goodslistPath = getPath
  		
  	},
  	getData(state,res){
  		state.data = res.data
  	},
  	getLoginNumber(state,phone){
		sessionStorage.setItem("usernamestatus","true");
  		 sessionStorage.setItem("username",phone);
  		 state.loginStatus = true
  	},
  	getHistroyPath(state,path){
  		state.histroyPath = path
  		 sessionStorage.setItem("histroyPath",path);
  	},
  	getShop(state,data){
//		state.shopData.push(data)
  		
  		 let result = state.shopData.some((item)=>{
						if(item.id==data.id){
							item.num = item.num +1;
							return true
						}else{
							
							return false
						}
					})
			if(!result){
				state.shopData.push(data)
			}
			 sessionStorage.setItem("shop",JSON.stringify(state.shopData));
  	}
  },
  actions: {
  	getData(context){
  		Axios.get('http://localhost:8222/'+context.state.saixuanPath)
  		.then((res)=>{
  			context.commit('getData',res)
  		})
  	}
  },
  modules: {
  }
})
