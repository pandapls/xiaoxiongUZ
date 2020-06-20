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
						<p id="active" @click="consult">企业咨询</p>
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
					企业咨询
				</p>
				<ul class="conlist">
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/bcefeae0a74d4db58672bdab85869346.jpg">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e507e31550bd4f46af5857f733a088c6.jpg">
					</li>
					<li>
						<h5>小熊U租固定资产管理SaaS系统2.0正式发布，企业用户免费使用</h5>
						<p class="time">2020-04-30</p>
						<p>资产全生命周期管理解决方案</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e7a1cfb3df8348e7a2fcf13704d28430.jpg">
					</li>
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/3a69ab11619144ea8651927c3fabefad.png">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/50c94259130e42deb24a7c887b2f6eca.png">
					</li>
					<li>
						<h5>小熊U租固定资产管理SaaS系统2.0正式发布，企业用户免费使用</h5>
						<p class="time">2020-04-30</p>
						<p>资产全生命周期管理解决方案</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/bc830cba0a3d4bf487cf7821a2aaed6d.png">
					</li>
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/bcefeae0a74d4db58672bdab85869346.jpg">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/ae7f6e4d7c534de1acff5d5a55486d08.png">
					</li>
					<li>
						<h5>小熊U租固定资产管理SaaS系统2.0正式发布，企业用户免费使用</h5>
						<p class="time">2020-04-30</p>
						<p>资产全生命周期管理解决方案</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/8839b5d2fae04f289169a5ed02bb68b8.png">
					</li>
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/b4b61cae64914990ae4b816ee05bf60c.png">
					</li>
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/bcefeae0a74d4db58672bdab85869346.jpg">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e507e31550bd4f46af5857f733a088c6.jpg">
					</li>
					<li>
						<h5>小熊U租固定资产管理SaaS系统2.0正式发布，企业用户免费使用</h5>
						<p class="time">2020-04-30</p>
						<p>资产全生命周期管理解决方案</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/e7a1cfb3df8348e7a2fcf13704d28430.jpg">
					</li>
					<li>
						<h5>小熊U租联合京东打造企业超省月 推动中小企业长链扶持计划</h5>
						<p class="time">2020-05-30</p>
						<p>租机送好礼，万台电脑免费使用</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/3a69ab11619144ea8651927c3fabefad.png">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/50c94259130e42deb24a7c887b2f6eca.png">
					</li>
					<li>
						<h5>小熊U租2周年，就是这么666</h5>
						<p class="time">2020-05-19</p>
						<p>小熊U租两岁啦</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/50c94259130e42deb24a7c887b2f6eca.png">
					</li>
					<li>
						<h5>小熊U租固定资产管理SaaS系统2.0正式发布，企业用户免费使用</h5>
						<p class="time">2020-04-30</p>
						<p>资产全生命周期管理解决方案</p>
						<img src="https://file-gateway.52rental.com/file-gateway/stable/bc830cba0a3d4bf487cf7821a2aaed6d.png">
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
			li:hover{
				box-shadow:0px 0px 8px gainsboro;
			}
			li {
				width: 262px;
				height: 277px;
				padding: 15px;
				margin-left: 15px;
				margin-top: 20px;
				h5 {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 220px;
					color: #62486c;
					font-size: 17px;
					font-weight: 500;
				}
				.time{
					font-size: 14px;
					padding-top: 20px;
				}
				p{
					color: #677198;
					font-size: 12px;
					padding-bottom: 20px;
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