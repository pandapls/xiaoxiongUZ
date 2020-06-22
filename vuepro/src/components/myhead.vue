<template>
	<div class="myhead">
		<div class="headtop">
			<div>您好，欢迎来到小熊U租</div>
			<div class="hdrightbox">
				<span class="login"  v-show="!$store.state.loginStatus">请<a href="#">登录</a>/<a href="#">注册</a></span>|
				<span v-show="$store.state.loginStatus">{{username}}</span>
				<span class="order">
					<a href="#">我的订单</a>
					<a href="#">帮助中心</a>
				</span>|
				<span>售前热线：<span>400-678-5432</span></span>
				<span>售后热线：<span>400-678-5482</span></span>
			</div>
		</div>
		<div class="headmid" v-show="$store.state.headShow">
			<div class="xxicon" @click="goIndex"></div>
			<div class="headsearch">
				<input type="text" class="searchinput" v-model="value" @keyup="OnSearchData"/>
				<button class="searchbtn">搜索</button>
				<div class="list">
					<span>L13</span>
					<span>T430</span>
					<span>E490</span>
					<span>T480</span>
					<span>S20</span>
					<span>D22</span>
					<span>3020</span>
					<span>348G7</span>
					<span>288Pro G4</span>
				</div>
				<ul class="searchList" v-show="jug">
					<li  v-for="item,index in msg" @click="getValue(item)">{{item.title}}</li>
				</ul>
			</div>
			<div class="shopp" >
				<i class="el-icon-shopping-cart-2"></i>
				<button class="shopbtn" @click="$router.push('/shop')">购物车</button>
			</div>
		</div>
		<ul class="nav_1" v-show="$store.state.headShow">
			<li @mouseenter="show($event)" @mouseleave="hid($event)" @click="golist">
				全部商品分类
				<div class="nav_2" v-show="$store.state.jug">
					<navitem v-for="item,index in list" :title="item.name" :idPath="item.id" :icon1='icons[index]' :data='item.list' :leftimg='item.imgSrcs'></navitem>
				</div>
			</li>
			<li @click="$router.push('/index')" :class="{colorActive:$store.state.lihash=='#/index'}">商场首页</a></li>
			<li @click="$router.push('/special')" :class="{colorActive:$store.state.lihash=='#/special'}">特价专区</a></li>
			<li>小熊短租</li>
			<li>资产管理</li>
			<li @click="mine" :class="{colorActive:$store.state.lihash=='#/mine'}">关于我们</li>
			<li @click="speak" :class="{colorActive:$store.state.lihash=='#/speak'}">客户评价</li>
		</ul>
	</div>
</template>

<script>
	import navitem from './navitem.vue'
	
	export default{
		name:"myhead",
		components:{
			navitem
		},
		data(){
			return{
				icons:['icon-xingzhuang','icon-PCtaishiji','icon-yitiji','icon-xianshiqi','icon-pingbandiannao-','icon-shouji54','icon-xingxing','icon-printer','icon-dengguangyaokongqibeifen'],
				list:[],
				jug:false,
				value:'',
				msg:[],
				userShow:true,
				username:'',
				lihash:''
			}
		},
		created: function() {
			
			this.getHoneData("http://localhost:8222/public");
			this.$store.commit('changeNav',window.location.hash)
//			this.$store.state.lihash = window.location.hash
//			console.log(this.$store.state.lihash)
		},
		beforeUpdate(){
			this.$store.commit('changeHead',window.location.hash)
			
			if(JSON.parse(sessionStorage.getItem('username'))){
  				this.userShow = JSON.parse(sessionStorage.getItem('usernamestatus'))
    			this.username = JSON.parse(sessionStorage.getItem('username'))
	    	}else{
	    		this.userShow = this.$store.state.loginStatus
	    	}
		},
		methods: {
			getHoneData(path) {
				fetch(path)
					.then(res => res.json())
					.then(data => {
						this.list = data;
					})
					.catch(function(e) {
						console.log("oops! error:", e.message);
					});
			},
			getPath(val){
				 this.$store.state.indexpath =val
			},
			show(e){
				if(window.location.hash =='#/' ||window.location.hash =='#/index'){
					this.$store.state.jug = true
					return
				}else{
					this.$store.state.jug = true
				}
				
			},
			hid(e){
				if(window.location.hash =='#/' ||window.location.hash =='#/index'){
					this.$store.state.jug = true
					return
				}else{
					this.$store.state.jug = false
				}
				
			},
			mine(){
				this.$router.push('/mine')
			},
			speak(){
				this.$router.push('/speak')
			},
			goIndex(){
				this.$router.push('/index')
			},
			golist(){
//				this.$store.commit('changGoodslsitPath','default')
				this.$router.push('/goodslist')
//				if(tdata.data==[]){
//					this.jug = false;
//				}
			},
			OnSearchData(){
//				this.jug = true
				
				let path = "https://so.edianzu.com/sug?time=1592545130552&code=1e166dda01cbc44285bdaae39db8bd5a&plat=2&q="+this.value
				 fetch(path)
				.then(res => res.json())
				.then(data => {
					if(data.data ==[] ||this.value ==''||data.data ==undefined){
						this.jug = false
						return ;
					}
					this.jug = true
					this.msg = data.data;
				})
				.catch(function(e) {
					console.log("oops! error:", e.message);
				});
					
			},
			getValue(item){
				this.value = item.title
				this.jug = false
			}
		}
	}
</script>

<style lang="less">
	@import url("../assets/iconfont/iconfont.css");
	a{
		text-decoration: none;
		color:#000000 ;
	}
	button{
		outline: none;
	}
	.myhead{
		/*padding: 0 30px;*/
		background: #fff;
		.headtop{
			background: #f5f5f5;
			font-size: 12px;
			display: flex;
			justify-content: space-between;
			padding: 10px 130px!important;
			.hdrightbox{
				>span{
					display: inline-block;
					margin: 0 10px;
					span{
						color: #1caaeb;
						font-weight: 700;
					}
				}
				.login{
					a{
						color: #49bbef;
						text-decoration: none;
						margin: 0 3px;
					}
				}
				.order{
					a{
						text-decoration: none;
						color: #716666;
						margin: 0 3px;
					}
				}
			}
		}
		.headmid{
			padding: 20px 130px!important;
			display: flex;
			justify-content: space-between;
			/*align-content: space-around;*/
			margin: 10px 0;
			.xxicon{
				
				width: 180px;
				height: 80px;
				 /*zoom: 0.4;*/
				 background: url(/img/product-list-v1-9.404cb190.png) 0px 0px no-repeat;
			}
			.headsearch{
				width: 500px;
				height:40px;
				border: 3px solid #009fe8 ;
				border-radius: 25px;
				margin: auto 0;
				position: relative;
				.searchinput{
					width: 350px;
					height: 38px;
					outline: none;
					font-size: 12px;
					position: absolute;
					border-radius: 18px;
					border: none;
					left:10px;
					top: 0px;
					text-indent: 10px;
				}
				.searchbtn{
					position: absolute;
					right: -2px;
					height: 40px;
					width: 100px;
					background: #009fe8;
					color: #fff;
					border: none;
					border-radius:20px ;
					font-size: 5px;
					top: 0px;
				}
				.list{
					position: absolute;
					bottom: -20px;
					font-size: 12px;
					left: 10px;
					span{
						display: inline-block;
						margin: 0px 3px;
						color: #9f9e9d;
					}
				}
				.searchList{
					list-style: none;
					width: 386px;
					/* height: 300px; */
					line-height: 30px;
					font-size: 12px;
					padding: 1px 10px;
					color: black;
					border: 1px solid #009fe8;
					border-top: none;
					background: #fff;
					z-index: 1000;
					position: absolute;
					top: 42px;
					left: 11px;
				}
			}
			.shopp{
				position: relative;
				margin: auto 0;
				i{
					position: absolute;
					top: 12px;
					left:20px!important;
					color: #009fe8;
					font-size: 14px;
				}
			}
			.shopbtn{
				font-size: 12px;
				background: #fff;
				padding: 10px 40px!important;
				border: 2px solid #009fe8;
				border-radius: 20px;
				outline: none;
			}
		}
		.nav_1{
			z-index: 20;
		padding: 30px 130px!important;
			list-style: none;
			display: flex;
			font-size: 14px;
			padding-bottom: 0;
			.colorActive{
				color: #009fe8;
			}
			>li{
				/*border:1px solid #009fe8;*/
				width: 150px;
				text-align: center;
				cursor: pointer;
				line-height: 40px;
			}
			/*li:nth-of-type(1):hover{
				.nav_2{
					display: block;
				}
			}*/
			>li:nth-of-type(1){
				width: 200px;
				text-align: left;
				text-indent: 20px;
				background: #009fe8;
				color: #fff;
				position: relative;
				.nav_2{
					z-index: 20;
					position:absolute;
					top:40px!important;
					left:0;
					.navlist{
						width: 200px;
						line-height: 40px;
						background: #ffffff;
						color: black;
						.left{
							position: relative;
							line-height: 50px;
							width: 200px;
							.title{
								margin: 0 25px;
							}
							.iconfont{
								font-size: 16px;
								position: absolute;
								left: 0px;
							}
							.el{
								position: absolute;
								font-size: 5px;
								right: 5px;
								top: 50%;
								transform: translateY(-50%);
							}
						}
						
						
						
					}
					.navlist:hover{
						.left{
							color: #4dc5f4;
						}
						background: #eff9fd;
						.contentRight{
							display: block;
						}
					}
					
				}
				
			}
		}
	}
</style>