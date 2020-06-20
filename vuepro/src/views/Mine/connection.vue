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
						<p @click="server">服务网点</p>
					</li>
					<li>
						<h5>新闻中心</h5>
						<p @click="consult">企业咨询</p>
						<p @click="medio">媒体报道</p>
					</li>
					<li>
						<h5>品牌合作</h5>
						<p id="active" @click="connection">联系我们</p>
						<p @click="cooperate">商业合作</p>
					</li>
				</ul>
			</div>
			<div class="rightBox">
				<p class="rightTittle">
					联系我们
				</p>
				<div class="boxContent">
					<ul class="userEmail">
						<li>
							<div class="imguser"></div>
							<p class="connecuser">联系人</p>
							<p>林先生</p>
						</li>
						<li>
							<div class="imgemail"></div>
							<p class="connecuser">邮箱</p>
							<p>lxBDS@lxrental.com</p>
						</li>
					</ul>
					<div class="imgcontact">
						<img src="../../assets/aboutUs/bg_contactUs.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			myIndex() {
				this.$router.push("/myindex")
			},
			address() {
				this.$router.push("/address")
			},
			server() {
				this.$router.push("/server")
			},
			consult() {
				this.$router.push("/consult")
			},
			medio() {
				this.$router.push("/medio")
			},
			connection() {
				this.$router.push("/connection")
			},
			cooperate() {
				this.$router.push("/cooperate")
			}
		}
	}
</script>
<style scoped lang="less">
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
		background-image: url(../../assets/aboutUs/titleBg_contact.png);
		background-repeat: no-repeat;
		.rightTittle {
			font-size: 14px;
			font-weight: bold;
			color: #333333;
			margin-left: 40px;
			height: 50px;
			line-height: 70px;
		}
		.boxContent {
			width: 88%;
			background-color: white;
			margin: 0 auto;
			margin-top: 100px;
			.userEmail {
				list-style: none;
				display: flex;
				padding: 40px 0px;
				li {
					margin: 0 auto;
					p {
						color: #6f6f6f;
						font-size: 14px;
						text-align: center;
						line-height: 50px;
					}
					.connecuser {
						color: #b6c4dc;
						font-size: 12px;
					}
					.imguser {
						width: 45px;
						height: 56px;
						background: url(../../../dist/img/spirit.e6a71448.png) -196px 0 no-repeat no-repeat;
					}
					.imgemail {
						width: 63px;
						height: 45px;
						margin-left: 28px;
						background: url(../../../dist/img/spirit.e6a71448.png) -299px 0 no-repeat no-repeat;
					}
				}
			}
			.imgcontact {
				margin-left: 130px;
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
	
	.hide {
		display: none;
	}
</style>