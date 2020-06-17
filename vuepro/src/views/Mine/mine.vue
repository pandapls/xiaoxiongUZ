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
						<p>企业概况</p>
						<p>公司地址</p>
						<p>服务网点</p>
					</li>
					<li>
						<h5>关于我们</h5>
						<p>企业咨询</p>
						<p>媒体报道</p>
					</li>
					<li>
						<h5>关于我们</h5>
						<p>联系我们</p>
						<p>商业合作</p>
					</li>
				</ul>
			</div>
			<div class="rightBox">
				<p class="rightTittle">
					企业概况
				</p>
				<div class="introduction">
					<p class="in-title">企业简介</p>
					<div class="in-content">
						<div class="playaudio">
							<video class="bearrentalAdvertisingVideo" src="https://app.52rental.com/introduce/video/lingxiongrental.mp4" poster="https://www.bearrental.com/build/img/aboutUs/videoBg.png"></video>
						</div>
						<div class="playFont">

							<p>
								小熊U租是中国领先的IT办公设备运营商，15年服务企业超过3万家，被国务院工信部作为行业标杆认定为“国家中小企业公共服务示范平台”，代表行业最高服务能力和水平。近一年半获得五轮融资，融资速度与融资规模行业领先，是腾讯众创空间与京东企业业务战略合作伙伴。股东包括腾讯集团、京东集团、达晨、东方富海等，并获得国家中小企业发展基金、财政部旗下新兴产业基金、深圳市引导基金、福田区引导基金等四支政府基金注资。
							</p>
							<p>
								小熊U租提供IT办公设备综合解决方案，包括IT办公设备租赁、IT技术服务、IT设备回收、资产管理SaaS软件等服务，建立了行业唯一的全产业链生态运营体系，为企业解决运营中存在的IT采购资金占用大、资产管理困难、技术服务响应缓慢、办公设备效率低下、IT资产闲置等五大痛点，帮助企业重构IT资产的效率与价值，实现轻资产化转型，让企业轻松办公。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
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
		display: flex;
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
			}
		}
	}
	
	.rightBox {
		width: 1000px;
		background: white;
		margin-left: 20px;
		.rightTittle {
			font-size: 14px;
			font-weight: bold;
			color: #686968;
			margin-left: 40px;
			height: 50px;
			line-height: 70px;
			border-bottom: 1px solid #e9e9e9;
		}
		.introduction {
			margin-left: 40px;
			.in-title {
				text-align: center;
				color: #947469;
				height: 50px;
				line-height: 65px;
				border-bottom: 1px solid #e9e9e9;
				width: 200px;
				margin-left: 300px;
				font-family: "arial, helvetica, sans-serif";
				font-size: 18px;
			}
		}
		.in-content {
			display: flex;
			margin-top: 20px;
			.playaudio {
				.bearrentalAdvertisingVideo {
					width: 400px;
					height: 220px;
				}
			}
			.playFont {
				width: 500px;
				font-size: 14px;
				color: #6f6f6f;
				margin-left: 40px;
				p {
					text-indent: 23px;
					line-height: 25px;
				}
			}
		}
	}
</style>