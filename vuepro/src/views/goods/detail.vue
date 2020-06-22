<template>
	<div>
		<div class="conten">
			<div class="mainBox">
				<div class="mainBox_lef">
					<div class="proBox">
						<el-carousel height="534px">
							<el-carousel-item v-for="item,index in list.bannerimg">
								<PicZoom :url="item.imgUrl" :scale="2" />
							</el-carousel-item>
							<!--<el-carousel-item>
								<img src="https://file-gateway.52rental.com/file-gateway/stable/24aead4d4c274c749a59214d75ebaee0.jpg" />
							</el-carousel-item>
							<el-carousel-item>
								<img src="https://file-gateway.52rental.com/file-gateway/stable/dfb7c91e6b864bd5a685c0f43b1818ae.jpg" />
							</el-carousel-item>
							<el-carousel-item>
								<img src="https://file-gateway.52rental.com/file-gateway/stable/9aeffce05e5e428695da10404af01f71.jpg" />
							</el-carousel-item>-->
						</el-carousel>
					</div>
				</div>
				<div class="mainBox_right" >
					<h2>{{list.title}}</h2>

					<p class="price">
						月租金
						<span>￥{{list.yueprice}}/月</span>
					</p>
					<div class="peizhi">
						选择配置
						<span>
              <i class="peizhiI">
                <img :src="list.imgSrc" />
              </i>
              {{list.peizhi}}
            </span>
					</div>
					<div class="zuqi">
						<div class="zuqi-left">租赁期数</div>
						<ul class="zuqi-right">
							<li>
								<span class="metos">组合租凭</span> 月租金：
								<span class="redP">￥{{list.yueprice}}</span> 租期：
								<span class="redP">36</span>个月
							</li>
						</ul>
					</div>
					<!-- 起租日期： -->
					<div class="qZdate">
						<p>
							起租日期
							<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
						</p>
					</div>

					<div class="qZdate">
						<p>
							租机数量
							<el-input-number v-model="list.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
						</p>
					</div>
					<!-- 设配押金 -->
					<div class="deposit">
						<p>
							设备押金
							<span>￥{{list.cashpledge}}</span> <!--合计支付押金-->
							<!--<span>￥{{zongJia}}</span>-->
						</p>
					</div>
					<div class="deposit">
						<p>
							首期租金
							<span class="SQzujin">￥{{list.shouqizj}}</span> 保证金
							<span class="SQzujin">￥{{list.bzj}}</span>
						</p>
					</div>
					<!-- 加入购物车 -->
					<div class="addShopC">
						<button class="mianYj">免押金租凭</button>
						<button class="shopc" @click="addShop">加入购物车</button>
					</div>
				</div>
			</div>
			<!-- 商品介绍 -->
			<div class="bottombox clearfloat">
				<div class="leftdebox clearfloat">
					<div class="items clearfloat">
						<div class="item">
							<img src="http://localhost:8222/data/special/specialimg/ytjImg/img4.jpg"/>
							<p class="ztitle">苹果Apple iMac 21.5英寸一体机</p>
							<p class="dec">【特价】I5-4代/8G/1T/核显/Retina显示屏</p>
							<p class="jiage">
								<span class="nowprice"><span>￥</span>89<span>/月</span></span> 
							</p>
						</div>
						<div class="item">
							<img src="http://localhost:8222/data/special/specialimg/ytjImg/img4.jpg"/>
							<p class="ztitle">苹果Apple iMac 21.5英寸一体机</p>
							<p class="dec">【特价】I5-4代/8G/1T/核显/Retina显示屏</p>
							<p class="jiage">
								<span class="nowprice"><span>￥</span>89<span>/月</span></span> 
							</p>
						</div>
						<div class="item">
							<img src="http://localhost:8222/data/special/specialimg/ytjImg/img4.jpg"/>
							<p class="ztitle">苹果Apple iMac 21.5英寸一体机</p>
							<p class="dec">【特价】I5-4代/8G/1T/核显/Retina显示屏</p>
							<p class="jiage">
								<span class="nowprice"><span>￥</span>89<span>/月</span></span> 
							</p>
						</div>
						<div class="item">
							<img src="http://localhost:8222/data/special/specialimg/ytjImg/img4.jpg"/>
							<p class="ztitle">苹果Apple iMac 21.5英寸一体机</p>
							<p class="dec">【特价】I5-4代/8G/1T/核显/Retina显示屏</p>
							<p class="jiage">
								<span class="nowprice"><span>￥</span>89<span>/月</span></span> 
							</p>
						</div>
					</div>
				</div>
				<div class="detail-box ">
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="商品详情" name="first">
							<div class="img" v-for="(itemi,idnexi) in list.img" :key="idnexi">
								<img :src="itemi.imgUrl" />
							</div>
						</el-tab-pane>
						<el-tab-pane label="商品参数" name="second">
							<div class="canshu">
								<h3>商品参数</h3>
								<table width="100%" border="1">
									<tbody>
										<tr>
											<th>联想 E96X 台式电脑</th>
											<br />
										</tr>
										<tr>
											<th>
												显 示 器：联想 T2055 19.5英寸
											</th>
											<br />
										</tr>
										<tr>
											<th>处 理 器：Intel 双核</th>
											<br />
										</tr>
										<tr>
											<th>内存容量：4G</th>
											<br />
										</tr>
										<tr>
											<th>硬盘容量：128G 固态硬盘</th>
											<br />
										</tr>
										<tr>
											<th>显卡芯片：集成核显</th>
											<br />
										</tr>
										<tr>
											<th>网卡通讯：集成网卡</th>
											<br />
										</tr>
										<tr>
											<th>
												其他接口： 6×USB3.0，2×USB3.1 Gen2，2×USB2.0， 耳机输出接口，麦克风输入接口，VGA，HDMI，RJ45（网络接口）， 电源接口，1×PS/2， 1×PCIe x16，1×PCIe x1
											</th>
											<br />
										</tr>
										<tr>
											<th>键 鼠：双键USB鼠标，标准键盘</th>
											<br />
										</tr>
										<tr>
											<th>机箱类型：立式</th>
											<br />
										</tr>
										<tr>
											<th>机箱尺寸：376x321x165mm</th>
											<br />
										</tr>
									</tbody>
								</table>
							</div>
						</el-tab-pane>
						<el-tab-pane label="保修服务" name="third">
							<div class="baoxiuf">
								<h3>保修服务</h3>
								<p>
									<span>1.热线服务：</span>
									<br />售后服务热线4006785482，服务时间为周一至周日8:00-20:00。专业技术工程师12小时在线提供技术支持服务及远程协助服务。
								</p>
								<p>
									<span>2.软件服务：：</span>
									<br />软件问题免费提供远程处理服务，软件问题如需要提供上门服务，按照100元/单收取上门服务费。
								</p>
								<p>
									<span>3.上门维修服务：</span>
									<br />北京、上海、广州、深圳、武汉、南京、成都、厦门，服务网点周边区域最快在2个工作小时上门维修，其他城市中心区域最快4个工作小时上门维修
								</p>
								<p>
									<span>4.物流寄送维修：</span>
									<br />除北京、上海、广州、深圳、武汉、南京、成都、厦门以外城市，如需要寄送维修或者换机维修，双方通过第三方物流团队寄送方式，保修范围内物流快递费用由小熊U租承担，客户问题维修或更换物流费用客户承担。
								</p>
							</div>
						</el-tab-pane>
						<el-tab-pane label="保修项目" name="fourth">
							<div class="baoxiuf">
								<h3>保修项目</h3>
								<p>
									<span>小熊U租为租赁设备提供2种保修方式：</span>
									<span>1.标准保修：</span>
									<br />设备正常使用情况下出现的电性能或功能故障（不包含进水进液腐蚀、进虫腐蚀、磕碰、雷击等不可抗拒因素导致故障），专业技术人员提供上门维修服务。
								</p>
								<p>
									<span>2.换机保修：</span>
									<br />1）客户收到机器15天内，出现电性能故障，可以做换机维修操作；
									<br />2）同一个设备同一个备件故障，出现两次可以做换机维修操作；
									<br />3）特殊情况换机，需要经过客户与业务人员沟通后特殊申请，小熊U租根据实际情况评估，在给与客户准确答复。
								</p>
								<p>
									<span>特别说明：小熊U租只针对设备硬件进行保修，软件及数据问题不在小熊U租服务范围之内，也无任何责任或义务保障客户软件及数据问题，请客户自行做好数据备份工作。</span>
								</p>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
</div>
		</div>
</template>

<script>
	import PicZoom from 'vue-piczoom'
	export default {

		data() {
			return {
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				},
				activeName: "first",
				zongJia: 0,
				value1: "",
				num: 1,
			list:[]
			}
		},
		components:{
			PicZoom

		},
		mounted() {
			this.getHoneData("http://localhost:8222/"+this.$store.state.goodDedetail);
			this.handleChange(1);
				console.log(this.list)
		},
		methods: {
			handleChange(value) {
//			console.log(this.list)
				this.zongJia = (value * parseInt(this.list.cashpledge)).toFixed(2);
				this.list.num = value
//				console.log(this.list.num )
		
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			getHoneData(path) {
		      fetch(path)
		        .then(res => res.json())
		        .then(data => {
		        console.log(data);
		          this.list = data[0];
		        })
		        .catch(function(e) {
		          console.log("oops! error:", e.message);
		        });
		    },
		    addShop(){
		    	if(JSON.parse(sessionStorage.getItem('username'))){
		    		
		    			this.$store.commit('getShop',this.list)
//		    			this.$router.push('/shop')
	 					this.$message({
	            showClose: true,
	            message: "加入成功",
	            duration: 2000,
	            type: 'success'
	          });
		    	}else{
		    		this.$router.push('/login')
		    	}
		    }
		}
	};
</script>

<style lang="less" scoped>
	.conten {
		padding: 0 60px;
		.mainBox {
			margin-top: 30px;
			display: flex;
			width: 100%;
			background: #fff;
			padding: 19px 20px;
			margin-bottom: 14px;
			box-sizing: border-box;
			.mainBox_lef {
				width: 532px;
				background: #fff;
				position: relative;
				.proBox {
					width: 532px;
					height: 532px;
					border: 1px solid #dfdfdf;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.mainBox_right {
				overflow: hidden;
				margin-left: 15px;
				width: 100%;
				h2 {
					font-size: 18px;
					color: #333;
					margin-top: 1px;
					text-indent: 2em;
					width: 100%;
				}
				.price {
					width: 100%;
					font-size: 14px;
					margin-top: 8px;
					color: #5f5445;
					text-indent: 15px;
					border: 1px solid #efe7ce;
					height: 40px;
					font-size: 16px;
					line-height: 40px;
					background-color: #f5f5f5;
					span {
						margin-left: 18px;
						font-size: 20px;
						font-weight: 600;
						color: #ff3b42;
					}
				}
				.peizhi {
					width: 100%;
					margin-top: 15px;
					color: #5f5445;
					font-size: 14px;
					text-indent: 15px;
					span {
						padding: 3px;
						margin-left: 18px;
						font-size: 15px;
						.peizhiI {
							vertical-align: -6px;
							img {
								width: 25px;
								height: 23px;
							}
						}
					}
				}
				.zuqi {
					margin-top: 20px;
					display: flex;
					.zuqi-left {
						text-align: center;
						width: 93px;
						line-height: 45px;
						font-size: 14px;
						color: #584433;
					}
					.zuqi-right {
						.active {
							padding: 3px;
						}
						li {
							font-size: 15px;
							padding: 10px;
							border: 1px solid#dfd6c3;
							width: 470px;
							list-style: none;
							margin-bottom: 15px;
							color: #584433;
							box-sizing: border-box;
							.metos {
								background: #ffe0c7;
								color: #ff4e47;
								font-size: 14px;
								border-radius: 4px;
							}
							.redP {
								margin: 0 10px;
								color: #ff4e47;
							}
						}
					}
				}
				.qZdate {
					margin-bottom: 14px;
					p {
						padding: 0 16px;
						color: #5f5445;
						font-size: 14px;
						.el-date-editor {
							margin-left: 16px;
						}
						.el-input-number {
							margin-left: 16px;
						}
					}
				}
				.deposit {
					margin-bottom: 25px;
					padding: 0 16px;
					font-size: 14px;
					color: #5f5445;
					p {
						.SQzujin {
							font-size: 16px;
							font-weight: 600;
						}
						span {
							margin: 0 30px;
							color: #ff3d36;
						}
					}
				}
				//   加入购物车
				.addShopC {
					padding: 0 16px;
					button {
						margin-right: 15px;
						outline: none;
						border-radius: 5px;
						border: none;
						width: 140px;
						height: 45px;
						line-height: 43px;
						text-align: center;
						font-size: 14px;
						cursor: pointer;
					}
					.mianYj {
						color: #fff;
						background: #008dbf;
					}
					.shopc {
						color: #009fe8;
						background: #fff;
						border: 1px solid #009fe8;
					}
				}
			}
		}
		.camshu {
			/*padding: 0 100px;*/
			text-align: left;
			tr {
				/*padding: 0 100px;*/
				border-bottom: 1px solid #f7f7f7;
				height: 36px;
				line-height: 36px;
				font-size: 14px;
				background-color: #fff;
				color: #666;
				text-align: left;
				th {
					padding-left: 16px;
				}
			}
		}
		.detail-box {
			width:60%;
			margin: 0 40px;
			padding: 0 50px;
			background: #fff;
			text-align: center;
			img {
				width: 80%;
			}
		}
		.baoxiuf {
			text-align: left;
			
			p {
				line-height: 23px;
				font-size: 13px;
				span {
					font-weight: 600;
				}
			}
		}
	}
	.bottombox{
		display: flex;
		justify-content: space-around;
		margin: 50px 0;
		.leftdebox{
			width: 300px;
			/*height: 400px;*/
			/*background: #fff;*/
		}
		.items{
				width: 100%;
				.item{
					text-align: center;
					float: left;
					margin: 5px 0;
					width: 260px;
					margin-left: 10px;
					padding: 5px 20px;
					height: 370px;
					background: #FFF;
					line-height:30px;
					img{
						width: 250px;
					}
					.ztitle{
						padding: 0 5px;
						width: 240px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-weight: 700;
					}
					.dec{
						text-align: left;
						width: 250px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 13px;
					}
					.jiage{
						margin-top: 20px;
						text-align: left;
						position: relative;
						.nowprice{
							color: red;
							font-size:26px;
							font-weight: 700;
							span{
								font-size: 13px;
								font-weight: 400;
							}
						}
						.oldprice{
							
							font-size: 12px;
							color: #a699a6;
							text-decoration:line-through;
							margin: 0 5px;
						}
						.nowbtn{
							position: absolute;
							right: -20px;
							bottom: 0;
							width: 100px;
							height: 40px;
							background: #f95d5d;
							color: #fff;
							border: none;
						}
					}
					
				}
			}
	}
	.el-tab-pane{
		text-align: center;
	}
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
</style>