<template>
	<div class="myfoot">
		<ul class="topbox clearfloat">
			<li>
				<span></span>
				<div class="rightbox">
					<p>网点多覆盖广</p>
					<p>快速上门</p>
				</div>
			</li>
			<li>
				<span class="success"></span>
				<div class="rightbox">
					<p>成功解决方案</p>
					<p>合作方式灵活丰富</p>
				</div>
			</li>
			<li>
				<span class="global"></span>
				<div class="rightbox">
					<p>行业领先革新</p>
					<p>免押金IT技术外包</p>
				</div>
			</li>
			<li>
				<span class="sale"></span>
				<div class="rightbox">
					<p>售后无忧保障</p>
					<p>专业技术团队支持</p>
				</div>
			</li>
		</ul>
		<div class="bottombox">
			<div class="leftbox">
				<div class="item">
					<p class="title">新手指南</p>
					<p><a href="#">常见问题</a></p>
					<p><a href="#">租凭流程</a></p>
					<p><a href="#">租金支付</a></p>
					<p><a href="#">开票说明</a></p>
				</div>
				<div class="item">
					<p class="title">售后服务</p>
					<p><a href="#">设备标准</a></p>
					<p><a href="#">服务标准</a></p>
					<p><a href="#">赔偿标准</a></p>
					<p><a href="#">退换货政策</a></p>
					<p><a href="#">物流时效及费用标准</a></p>
					<p><a href="#">设备新旧判断</a></p>
					
				</div>
				<div class="item">
					<p class="title">特色服务</p>
					<p><a href="#">免押金服务</a></p>
					<p><a href="#">既租既还</a></p>
					<p><a href="#">上面服务</a></p>
					<p><a href="#">企业微信应用</a></p>
				</div>
				<div class="item">
					<p class="title">关于我们</p>
					<p><a href="#">企业概况</a></p>
					<p><a href="#">公司地址</a></p>
					<p><a href="#">服务网点</a></p>
				</div>
				<div class="item">
					<p class="title">新闻中心</p>
					<p><a href="#">企业资讯</a></p>
					<p><a href="#">媒体报道</a></p>
				</div>
			</div>
			<div class="rightbox">
				<div class="img">
				</div>
				<div class="phone">
					<p>售前热线(8:00~20.00)</p>
					<p class="number">400-678-5432</p>
					<p>售后热线(8:00~20.00)</p>
					<p class="number">400-678-5482</p>
				</div>
				<div class="code">
					<img src="../assets/images/qrCode_bearRental.png"/>
					<p>扫码关注我们</p>
				</div>
			</div>
		</div>
		<div class="banquan">
			<p>
				Copyright &copy; 2013 - 2020 深圳市凌雄租赁服务有限公司. All Rights Reserved
			</p>
			<p>粤ICP备15099642号-6 <img src="../assets/images/ICBC.png"/></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "myfoot",
	}
</script>

<style lang="less">
	.myfoot {
		padding: 40px 130px;
		/*font-size: 12px;*/
		background: #fff;
		.topbox {
			list-style: none;
			border-bottom: 1px solid #fbfbfb;
			padding: 50px 0;
			justify-content: space-between;
			display:flex;
			margin: 0 auto;
			li {
				/*float: left;*/
				
				width: 200px;
				margin: 0 auto;
				span {
					display: inline-block;
					float: left;
					width: 46px;
					height: 46px;
					/*border: 1px solid red;*/
					/*zoom: 0.5;*/
					background: url(../assets/images/product-list-v1-9.png) -64px -499px no-repeat;
					/*background-size:1500%;*/
					margin-right: 30px;
				}
				.success {
					background: url(../assets/images/product-list-v1-9.png) -160px -500px no-repeat;
				}
				.global {
					background: url(../assets/images/product-list-v1-9.png) -253.2px -500px no-repeat;
				}
				.sale {
					background: url(../assets/images/product-list-v1-9.png) -350px -500px no-repeat;
				}
				.rightbox {
					line-height: 20px;
					font-size: 16px;
					/*float: left;*/
					p:nth-of-type(2) {
						color: #acacac;
						font-size: 12px;
					}
				}
			}
		}
		.bottombox{
			display: flex;
			padding: 0 60px;
			margin-top: 20px;
			padding-bottom: 10px;
			border-bottom: 1px solid #efefef;
			.leftbox{
				width: 50%;
				display: flex;
				/*border-right: 1px solid #e5e5e5;*/
				.item{
					flex: 1;
					line-height: 20px;
					.title{
						line-height: 20px;
						font-size: 14px;
					}
					p{
						text-align: left;
					}
					a{
						font-size: 12px;
						text-decoration: none;
						color: #afb2c0;
					}
				}
			}
			.rightbox{
				width: 50%;
				display: flex;
				div{
					flex: 1;
				}
				.phone{
					font-size: 14px;
					line-height: 30px;
					.number{
						font-size: 16px;
						font-weight: 700;
					}
				}
				.img{
					width: 50%;
					height: 138px;
				    /*zoom: 0.4;*/
				    background: url(/img/product-list-v1-9.404cb190.png) 4px -565px no-repeat;
				}
				.code{
					text-align: center;
					font-size: 16px;
					img{
						width: 100px;
						height: 100px;
					}
					p{
						color: #8c8c80;
						font-size: 16px;
						text-align: center;
					}
					
				}
				
			}
		}
		.banquan{
			font-size: 12px;
			color: #a5a5a5;
			text-align: center;
			padding: 20px 0;
			line-height: 25px;
			p{
				position: relative;
			}
			img{
				width: 20px;
				height: 30px;
				position: absolute;
				right:42%;
				top: 0px;
			}
		}
	}
	/*清除浮动*/
	
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
</style>