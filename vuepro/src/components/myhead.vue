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
			<li>关于我们</li>
			<li>客户评价</li>
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
			font-size: 12px;
			display: flex;
			justify-content: space-between;
			padding: 10px 60px;
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
			padding: 20px 60px;
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
					text-indent: 5px;
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
			}
			.shopp{
				position: relative;
				margin: auto 0;
				i{
					position: absolute;
					top: 12px;
					left: 5px;
					color: #009fe8;
					font-size: 14px;
				}
			}
			.shopbtn{
				font-size: 12px;
				background: #fff;
				padding: 10px 25px;
				border: 2px solid #009fe8;
				border-radius: 20px;
			}
		}
		.nav_1{
			z-index: 20;
			padding: 30px 60px;
			list-style: none;
			display: flex;
			font-size: 14px;
			>li{
				/*border:1px solid #009fe8;*/
				width: 150px;
				text-align: center;
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
					top:50px;
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