<template>
	<div class="mine">
		<div class="nav">
			<a href="../index/index.vue">首页</a>
			>
			<span>关于我们</span>
		</div>
		<div class="section">
			<div class="leftBox">
				<ul>
					<li>
						<h5>关于我们</h5>
						<p @click="myIndex">企业概况</p>
						<p @click="address">公司地址</p>
						<p id="active" @click="server">服务网点</p>
					</li>
					<li>
						<h5>新闻中心</h5>
						<p @click="consult">企业咨询</p>
						<p @click="medio">媒体报道</p>
					</li>
					<li>
						<h5>品牌合作</h5>
						<p @click="connection">联系我们</p>
						<p @click="cooperate">商业合作</p>
					</li>
				</ul>
			</div>
			<div class="rightBox">
				<p class="rightTittle">
					服务网点
				</p>
				<div class="serMap">
					<img src="https://www.bearrental.com/build/img/aboutUs/map_serviceNetworkStation.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			myIndex(){
				this.$router.push("/myindex")
			},
			address(){
				this.$router.push("/address")
			},
			server(){
				this.$router.push("/server")
			},
			consult(){
				this.$router.push("/consult")
			},
			medio(){
				this.$router.push("/medio")
			},
			connection(){
				this.$router.push("/connection")
			},
			cooperate(){
				this.$router.push("/cooperate")
			}
		}
	}
</script>
<style scoped lang="less">

.mine{
	padding: 0 75px;
}
	.nav {
		margin-left: 55px;
		color: #bab8c2;
		height: 50px;
		line-height: 50px;
		font-size: 13px;
		a {
			text-decoration: none;
			color: #3a3e41;
		}
	}
	
	.section {
		width: 100%;
		display: flex;
		margin-bottom: 80px;
	}
	
	.leftBox {
		margin-left: 55px;
		background: white;
		width: 200px;
		height: 500px;
		ul {
			padding-top: 20px;
			list-style: none;
			li {
				text-indent: 45px;
				line-height: 35px;
				h5 {
					padding-top: 15px;
					padding-bottom: 10px;
					font-size: 17px;
				}
				p {
					font-size: 15px;
					color: #7f667f;
				}
				p:hover {
					color: #009fe8;
					border-left: 3px solid #009fe8;
				}
			}
		}
	}
	
	.rightBox {
		width: 1000px;
		background: white;
		margin-left: 20px;
		padding-bottom: 30px;
		.rightTittle {
			font-size: 14px;
			font-weight: bold;
			color: #686968;
			margin-left: 40px;
			height: 50px;
			line-height: 70px;
			border-bottom: 1px solid #e9e9e9;
		}
		.serMap{
			padding: 80px 50px;
			img{
				width: 911px;
				height: 473px;
			}
		}
	}	
	
	.prodution {
		font-weight: bold;
		padding-top: 40px;
		text-align: center;
	}
	
	.imglist {
		padding: 40px 100px;
	}
	
	#active {
		color: #009fe8;
		border-left: 3px solid #009fe8;
	}
	.hide{
		display: none;
	}
</style>