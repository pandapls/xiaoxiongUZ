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
						<p id="active" @click="myIndex">企业概况</p>
						<p @click="address">公司地址</p>
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
					<div class="in-title">
						企业简介
						<div class="in-border"></div>
					</div>
					<div class="in-content">
						<div class="playaudio">
							<div class="layer hide">
								<div class="playBtn"></div>
							</div>
							<video autoplay controls name="media" type="video/mp4" class="bearrentalAdvertisingVideo" src="https://app.52rental.com/introduce/video/lingxiongrental.mp4" poster="https://www.bearrental.com/build/img/aboutUs/videoBg.png"></video>
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
				<div class="introduction">
					<div class="in-title">
						股东背景
						<div class="in-border"></div>
					</div>
					<div class="in-backlist">
						<img src="../../assets/aboutUs/shareholder_tx.png" />
						<img src="../../assets/aboutUs/shareholder_jd.png" />
						<img src="../../assets/aboutUs/shareholder_dc.png" />
						<img src="../../assets/aboutUs/shareholder_dffh.png" />
						<img src="../../assets/aboutUs/shareholder_qhcc.png" />
						<img src="../../assets/aboutUs/shareholder_gjzx.png" />
						<img src="../../assets/aboutUs/shareholder_szydjj.png" />
						<img src="../../assets/aboutUs/shareholder_ftydjj.png" />
					</div>
				</div>
				<div class="introduction">
					<div class="in-title">
						品牌优势
						<div class="in-border"></div>
					</div>
					<ul class="in-avantage">
						<li>
							<div class="a-imgicon">
							</div>
							<p>极致产品，超强稳定</p>
						</li>
						<li>
							<div class="b-imgicon">

							</div>
							<p>免押租赁，审核简单</p>
						</li>
						<li>
							<div class="c-imgicon">

							</div>
							<p>免费上门，定期巡检</p>
						</li>
						<li>
							<div class="d-imgicon">

							</div>
							<p>灵活下单，随需而变</p>
						</li>
					</ul>
					<ul class="in-avan">
						<li>
							<div class="e-imgicon">
							</div>
							<p>极致产品，超强稳定</p>
						</li>
						<li>
							<div class="f-imgicon">

							</div>
							<p>免押租赁，审核简单</p>
						</li>
						<li>
							<div class="g-imgicon">

							</div>
							<p>免费上门，定期巡检</p>
						</li>
					</ul>
				</div>
				<div class="introduction">
					<div class="in-title">
						业务模式
						<div class="in-border"></div>
					</div>
					<p class="prodution">小熊U租提供IT办公设备综合解决方案，包括IT办公设备租赁、IT技术服务、IT设备回收、资产管理SaaS软件等服务</p>
					<ul class="in-modul">
						<li>
							<img src="../../assets/aboutUs/businessModeImg1.png" />
							<p>1.IT办公设备租赁</p>
						</li>
						<li>
							<img src="../../assets/aboutUs/businessModeImg2.png" />
							<p>2.IT技术服务</p>
						</li>
						<li>
							<img src="../../assets/aboutUs/businessModeImg3.png" />
							<p>3.IT设备回收</p>
						</li>
						<li>
							<img src="../../assets/aboutUs/businessModeImg4.png" />
							<p>4.资产管理SaaS软件</p>
						</li>
					</ul>
				</div>
				<div class="introduction">
					<div class="in-title">
						服务客户
						<div class="in-border"></div>
					</div>
					<p class="prodution">服务客户30000+，500强企业100+，独角兽和上市公司2500+，客户满意度达96%</p>
					<div class="imglist">
						<img src="../../assets/aboutUs/serviceCustomer.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			myIndex(){
				this.$router.push("/mine")
			},
			address(){
				this.$router.push("/address")
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
		.introduction {
			margin-left: 40px;
			margin-top: 20px;
			.in-title {
				text-align: center;
				color: #947469;
				height: 56px;
				line-height: 65px;
				border-bottom: 1px solid #e9e9e9;
				width: 200px;
				margin-left: 340px;
				font-family: "arial, helvetica, sans-serif";
				font-size: 18px;
				position: relative;
				.in-border {
					width: 52px;
					height: 2px;
					background-color: #009fe8;
					position: absolute;
					top: 97%;
					left: 38%;
				}
			}
		}
		.in-content {
			display: flex;
			margin-top: 30px;
			.playaudio {
				width: 362px;
				height: 229px;
				position: relative;
				.layer {
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					background: rgba(8, 8, 8, .65);
					.playBtn {
						cursor: pointer;
						width: 68px;
						height: 68px;
						position: absolute;
						left: 50%;
						top: 50%;
						margin-left: -34px;
						margin-top: -34px;
						background: url(../../assets/aboutUs/spirit.png) 0 -220px no-repeat no-repeat;
					}
				}
				.bearrentalAdvertisingVideo {
					width: 100%;
					height: 100%;
					display: block;
					    outline: none;
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
	
	.in-backlist {
		display: flex;
		flex-wrap: wrap;
		img {
			margin-left: 62px;
			margin-top: 30px;
		}
	}
	
	.in-avantage {
		list-style: none;
		display: flex;
		margin-top: 30px;
		width: 100%;
		li {
			margin-left: 90px;
			div {
				width: 100px;
				height: 100px;
				margin: auto;
			}
			.a-imgicon {
				background: url(../../assets/aboutUs/spirit.png) 0 -115px no-repeat no-repeat
			}
			.b-imgicon {
				background: url(../../assets/aboutUs/spirit.png) -106px -300px no-repeat no-repeat;
			}
			.c-imgicon {
				background: url(../../assets/aboutUs/spirit.png) -213px -301px no-repeat no-repeat;
			}
			.d-imgicon {
				background: url(../../assets/aboutUs/spirit.png) -320px -301px no-repeat no-repeat;
			}
			p {
				text-align: center;
				font-size: 12px;
				line-height: 35px;
				color: #009fe8;
			}
		}
	}
	
	.in-avan {
		list-style: none;
		display: flex;
		width: 67%;
		margin: auto;
		li {
			padding-top: 40px;
			padding-right: 55px;
			flex: 1;
			div {
				width: 100px;
				height: 100px;
				margin: auto;
			}
			.e-imgicon {
				background: url(../../assets/aboutUs/spirit.png) 0 -402px no-repeat no-repeat
			}
			.f-imgicon {
				background: url(../../assets/aboutUs/spirit.png) -105px -402px no-repeat no-repeat;
			}
			.g-imgicon {
				background: url(../../assets/aboutUs/spirit.png) -213px -402px no-repeat no-repeat;
			}
			p {
				text-align: center;
				font-size: 12px;
				line-height: 35px;
				color: #009fe8;
			}
		}
	}
	
	.in-modul {
		list-style: none;
		display: flex;
		margin-top: 25px;
		margin-left: 20px;
		li {
			img {
				width: 150px;
				height: 90px;
				margin-left: 50px;
			}
			p {
				text-align: center;
				font-size: 12px;
				line-height: 35px;
				color: #009fe8;
				text-indent: 40px;
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