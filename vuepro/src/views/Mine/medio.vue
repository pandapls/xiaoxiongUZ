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
						<p id="active" @click="medio">媒体报道</p>
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
					媒体报道
				</p>
				<ul class="conlist">
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/b82dab4b1d4746c2a06af9382e8a23d5.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e4cf259b00864010a17c7f6253f830e1.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/a62fe5c73db043e7838fb8d3549a4146.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/977760a928a2423b9c4bb1799c48a936.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/3e39c5c0629141fc91733f8889ffb964.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/95f25a58116042799e6fdc770208b794.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/d6b2f6a63f4047f98aafdc78d77bb7bb.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/45e22506a8a74bb890246db0812b70a7.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/8e22d0bc8e9544ff91984433a0b76dff.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/b82dab4b1d4746c2a06af9382e8a23d5.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e4cf259b00864010a17c7f6253f830e1.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/360c6ed4acb348968a5374518b9e2663.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/637d9e6786c84ead9c52c88e8ce7bced.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/33155009ffb044d5b97889cca6b445ee.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/45e22506a8a74bb890246db0812b70a7.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/8e22d0bc8e9544ff91984433a0b76dff.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/b82dab4b1d4746c2a06af9382e8a23d5.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e4cf259b00864010a17c7f6253f830e1.jpg">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/3e39c5c0629141fc91733f8889ffb964.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
					<li>
						<img src="https://test-file-gateway.52rental.com/file-gateway/stable/95f25a58116042799e6fdc770208b794.png">
						<p>京东“企业超省月”落地深圳 携手小熊U租打造</p>
						<p>中小企业长链扶持模式</p>
					</li>
				</ul>
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
		padding-bottom: 100px;
		.rightTittle {
			font-size: 14px;
			font-weight: bold;
			color: #686968;
			margin-left: 40px;
			height: 50px;
			line-height: 70px;
			border-bottom: 1px solid #e9e9e9;
		}
		.conlist {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			margin-left: 30px;
			li:hover {
				box-shadow: 0px 0px 8px gainsboro;
			}
			li {
				width: 262px;
				height: 244px;
				padding: 15px;
				margin-left: 15px;
				margin-top: 15px;
				p {
					color: #666666;
					font-size: 13px;
					line-height: 30px;
				}
				img {
					width: 262px;
					height: 154px;
				}
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