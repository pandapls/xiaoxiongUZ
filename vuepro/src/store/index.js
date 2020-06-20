import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	jug:false,
  	goodslistPath:'default',
  	saixuanPath:'moren',
  	data:[]
  },
  mutations: {
  	changeNav(state,curHash){
	  		if(curHash=='#/' ||curHash=='#/index'){
						state.jug = true
				}else{
						state.jug = false
				}
  	},
  	changGoodslsitPath(state,getPath){
  		state.goodslistPath = getPath
  		
  	},
  	getData(state,res){
  		state.data = res.data
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
