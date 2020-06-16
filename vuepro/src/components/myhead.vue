<template>
	<div class="myhead">
		<div class="headtop">
			<div>您好，欢迎来到小熊U租</div>
			<div class="hdrightbox">
				<span class="login">请<a href="#">登录</a>/<a href="#">注册</a></span>|
				<span class="order">
					<a href="#">我的订单</a>
					<a href="#">帮助中心</a>
				</span>|
				<span>售前热线：<span>400-678-5432</span></span>
				<span>售后热线：<span>400-678-5482</span></span>
			</div>
		</div>
		<div class="headmid">
			<div class="xxicon"></div>
			<div class="headsearch">
				<input type="text" class="searchinput" />
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
			</div>
			<div class="shopp">
				<i class="el-icon-shopping-cart-2"></i>
				<button class="shopbtn">购物车</button>
			</div>
		</div>
		<ul class="nav_1">
			<li @mouseenter="show($event)" @mouseleave="hid($event)">
				全部商品分类
				<div class="nav_2" v-show="jug">
					<navitem v-for="item,index in list" :title="item.name" :icon1='icons[index]' :data='item.list' :leftimg='item.imgSrcs'></navitem>
				</div>
			</li>
			<li>商场首页</li>
			<li>特价专区</li>
			<li>小熊短租</li>
			<li>资产管理</li>
			<li @click="mine">关于我们</li>
			<li @click="speak">客户评价</li>
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
				jug:false
			}
		},
		mounted: function() {
			this.getHoneData("http://localhost:8000/public");
//			jug = this.$store.state.showNav
			console.log(window.location.hash)
			if(window.location.hash =='#/' ||window.location.hash =='#/index'){
					this.jug = true
				}
		},

		methods: {
			getHoneData(path) {
				fetch(path)
					.then(res => res.json())
					.then(data => {
//						console.log(data);
						this.list = data;
					})
					.catch(function(e) {
						console.log("oops! error:", e.message);
					});
			},
			getPath(val){
//				console.log(val)
				 this.$store.state.indexpath =val
			},
			show(e){
				if(window.location.hash =='#/' ||window.location.hash =='#/index'){
					this.jug = true
					return
				}else{
					this.jug = true
				}
				console.log(e)
				
			},
			hid(e){
				if(window.location.hash =='#/' ||window.location.hash =='#/index'){
					this.jug = true
					return
				}else{
					this.jug = false
				}
				
			},
			mine(){
				this.$router.push('/mine')
			},
			speak(){
				this.$router.push('/speak')
			}
		}
	}
</script>

<style lang="less">
	@import url("../assets/iconfont/iconfont.css");
	
	.myhead{
		/*padding: 0 30px;*/
		background: #fff;
		.headtop{
			background: #f5f5f5;
			font-size: 4px;
			display: flex;
			justify-content: space-between;
			padding: 2.5px 30px;
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
						margin: 0 1px;
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
			padding: 2.5px 30px;
			display: flex;
			justify-content: space-between;
			/*align-content: space-around;*/
			margin: 10px 0;
			.xxicon{
				
				width: 180px;
				height: 80px;
				 zoom: 0.4;
				 background: url(/img/product-list-v1-9.404cb190.png) 0px 0px no-repeat;
			}
			.headsearch{
				width: 200px;
				height:15px;
				border: 1px solid #009fe8 ;
				border-radius: 15px;
				margin: auto 0;
				position: relative;
				.searchinput{
					width: 150px;
					height: 12px;
					outline: none;
					font-size: 5px;
					position: absolute;
					border-radius: 15px;
					border: none;
					left: 0;
					top: 2px;
					text-indent: 5px;
				}
				.searchbtn{
					position: absolute;
					right: 0;
					height: 17px;
					width: 23px;
					background: #009fe8;
					color: #fff;
					border: none;
					border-radius:15px ;
					font-size: 5px;
					top: -1px;
				}
				.list{
					position: absolute;
					bottom: -8px;
					font-size: 2px;
					span{
						display: inline-block;
						margin: 0px 3px;
						color: #9f9e9d;
					}
				}
			}
			.shopp{
				position: relative;
				i{
					position: absolute;
					top: 10px;
					left: 5px;
					color: #009fe8;
					font-size: 7px;
				}
			}
			.shopbtn{
				font-size: 5px;
				background: #fff;
				padding: 3px 14px;
				border: 1px solid #009fe8;
				border-radius: 10px;
			}
		}
		.nav_1{
			padding: 2.5px 30px;
			list-style: none;
			display: flex;
			font-size: 5px;
			>li{
				/*border:1px solid #009fe8;*/
				width: 50px;
				text-align: center;
				line-height: 15px;
			}
			/*li:nth-of-type(1):hover{
				.nav_2{
					display: block;
				}
			}*/
			>li:nth-of-type(1){
				width: 80px;
				text-align: left;
				text-indent: 14px;
				background: #009fe8;
				color: #fff;
				position: relative;
				
				
				.nav_2{
					
					position:absolute;
					top:15px;
					left:0;
					
					.navlist{
						width: 80px;
						line-height: 20px;
						background: #ffffff;
						color: black;
						.left{
							position: relative;
							line-height: 20px;
							.iconfont{
								font-size: 5px;
								position: absolute;
								left: -8px;
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