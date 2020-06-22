<template>
	<div id="box">
		<Shophead></Shophead>
		<div class="nav" v-show="!nodata">
			<ul>
				<li>全选</li>
				<li>
					<span class="pad">商品信息</span>
				</li>
				<li>
					<span class="pad">单价</span>
				</li>
				<li>数量</li>
				<li>起租日期</li>
				<li>租期</li>
				<li>小计</li>
				<li>操作</li>
			</ul>
		</div>
		<div class="mid">
			<div class="mid-1" v-show="!nodata">
				<ul>
					<li class="xiao">
						小熊U租 为您减免押金
						<a href>￥0.00，申请免押金租贷></a>
					</li>
					<li class="zu">租贷区域</li>
				</ul>
			</div>
			<div class="mid-2" v-show="nodata">
				<p>
					<img src />
				</p>
				<p>商品购物车是空的</p>
				<p class="gray">快去挑选需要的设备吧！</p>
				<p>
					<button @click="$router.push('/index')">返回首页</button>
				</p>
			</div>
			<div class="mid-22" v-show="!nodata">
				<p class="p">
					<input type="checkbox" />租贷商品
				</p>
				<ul class="ul-1" v-for="(item,index) in shopList" :key="index">
					<li class="li1">
						<input type="checkbox" @click="setSelet(item)" :checked="item.Checkstate" />
					</li>
					<li>
						<img :src="item.imgSrc" width="88px" />
					</li>
					<li class="title">
						{{item.title}}
						<br />
						<p>即租即还</p>
					</li>
					<li>
						<p>
							月租金
							<span>{{item.yueprice}}元,1~12期</span>
						</p>
						<p>
							<span>{{item.yueprice}}元,13~24期</span>
						</p>
						<p>
							<span>￥{{item.ueprice}}元,25~36期</span>
						</p>
						<p>
							押金：￥ {{item.cashpledge}}
						</p>
					</li>
					<li>
						<div class="btn">
							<span class="reduce" @click="changeMoney(item,-1)">
                <i class="el-icon-minus"></i>
              </span>
							<span class="num">{{item.num}}</span>
							<span class="add" @click="changeMoney(item,1)">
                <i class="el-icon-plus"></i>
              </span>
						</div>
					</li>
					<li>
						<el-date-picker v-model="value1" type="date" size="small" placeholder="选择日期"></el-date-picker>
					</li>

					<li>
						<p>首期租金：￥{{item.shouqizj}}</p>
						<p>保证金：￥{{item.bzj}}</p>
						<p>押金小计：￥{{item.cashpledge}}</p>
					</li>
					<li class="li1 delete" @click="deleteCell(item, index)">
						<i class="el-icon-delete"></i>
					</li>
				</ul>
				<div class="later">
					<ul>
						<li>
							<input type="checkbox" @click="changAllcheck" :checked="checkAllFlag" />
						</li>
						<li>全选</li>
						<li class="delete2" @click="deletAll">删除选择的商品</li>
					</ul>
					<p class="ying1">
						应付金额：
						<span class="red">
              ￥
              <span class="pri">{{allprice}}</span>
						</span>
					</p>
					<p class="ying2">应付押金：￥{{allprice}} (押金总额：￥{{allyajin}}，减免：￥0.00) + 应付租金：￥{{allzujin}} + 保证金：￥0.00</p>
					<button>免押金租贷</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Shophead from "./components/myhead";
	export default {
		data() {
			return {
				shopList: [],
				value1: "",
				num: 1,
				activeName: "second",
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					}
				},
				allprice: null,
				allyajin: null,
				allzujin: null,
				checkAllFlag: true,
				nodata: false
			};
		},
		components: {
			Shophead
		},
		mounted() {
			this.$store.commit('changeHead',window.location.hash)
			this.shopList = JSON.parse(sessionStorage.getItem("shop"));
				if(this.shopList.length == 0) {
					console.log(1)
					this.nodata = true
				}
			this.Allprice()
		},
		methods: {
			//计算总价 
			Allprice() {
				this.allprice = 0
				this.shopList.forEach((item, index) => {
					if(item.Checkstate) {

						this.allyajin += parseInt(item.cashpledge) * parseInt(item.num)
						this.allzujin += parseInt(item.shouqizj) * parseInt(item.num)
						this.allprice += (parseInt(item.cashpledge) + parseInt(item.shouqizj)) * parseInt(item.num)
					} else {
						this.allyajin = 0
						this.allzujin = 0
					}
				})
				//					console.log(this.allprice)
			},
			//加减按钮
			changeMoney: function(product, num) {
				if(num > 0) {
					product.num++;
				} else {
					product.num--;
					if(product.num < 1) {
						product.num = 1;
					}
				}
				// 每次修改商品数量之后，均重新计算商品总价
				this.Allprice();
			},
			setSelet(item) {
				let num = 0;
				if(typeof item.Checkstate == "undefined") {
					this.$set(item, "Checkstate", true);

				} else {
					item.Checkstate = !item.Checkstate;
				}
				this.shopList.forEach(function(item, value) {
					if(item.Checkstate) {
						num++;
					}
				})
				// 如果选中的商品种类个数等于商品列表（数组）的长度，修改全选框的全选标志；
				if(num == this.shopList.length) {
					this.checkAllFlag = true;
				} else {
					this.checkAllFlag = false;
				}
				// 计算总价
				this.Allprice()
			},
			changAllcheck() {
				this.checkAllFlag = !this.checkAllFlag;
				this.shopList.forEach((item, index) => {
					if(typeof item.Checkstate == "undefined") {
						// 设置item的check属性
						this.$set(item, "Checkstate", this.checkAllFlag);
					} else {
						item.Checkstate = this.checkAllFlag;
					}
				})
				// 计算总价
				this.Allprice();

			},
			//删除商品
			deleteCell(val, index) {
				//						let deletindex =  this.$store.state.goodsData.indexOf(val)
				//						this.$store.state.goodsData.splice(index,1)
				let deletindex = this.$store.state.shopData.indexOf(val)
				this.$store.state.shopData.splice(index, 1)
				//						this.goodsData = this.$store.state.goodsData
				 this.shopList = this.$store.state.shopData
				 	sessionStorage.setItem("shop", JSON.stringify(this.$store.state.shopData));
				if(this.$store.state.shopData.length == 0) {
					console.log(1)
					this.allprice = 0
//					sessionStorage.setItem("shop", JSON.stringify(this.shopList));
					this.nodata = true

					//							this.$router.push('/shopping')
				}
				this.Allprice()
			},
			deletAll() {
				this.shopList = []
				this.allyajin = 0
				this.allzujin = 0
				this.nodata = true
				sessionStorage.removeItem("shop");

				this.Allprice()
			}
		},

	}
</script>

<style scoped lang="less">
	#box {
		background: white;
		height: 1000px;
		padding: 0 40px;
		.nav {
			background: #f5f5f5;
			ul {
				font-size: 12px;
				color: #9999a5;
				list-style: none;
				height: 40px;
				li {
					float: left;
					padding: 10px 50px;
					.pad {
						padding: 50px;
					}
				}
			}
		}
		.mid {
			height: 550px;
			margin: 30px;
			.mid-1 {
				height: 50px;
				margin: 0px 20px;
				ul {
					list-style: none;
					li {
						float: left;
					}
					.xiao {
						font-size: 14px;
						a {
							color: #35abff;
							text-decoration: none;
						}
					}
					.zu {
						float: right;
						font-size: 13px;
					}
				}
			}
			.mid-2 {
				/*display: none;*/
				height: 200px;
    padding: 50px 0;
				border: 1px solid #eeeeee;
				/*top: 50%;*/
				img {
					width: 250px;
				}
				p {
					text-align: center;
					padding: 7px;
					font-size: 14px;
					button {
						outline: 0 none;
						padding: 10px 49px;
						background-color: #009fe8;
						border: 1px solid #009fe8;
						color: white;
						border-radius: 2px;
						font-size: 13px;
					}
				}
				.gray {
					font-size: 12px;
					color: #99a6c4;
					font-size: 12px;
				}
			}
			.mid-22 {
				/*height:100%;*/
				border-bottom: 1px solid #eeeeee;
				border-top: 1px solid #eeeeee;
				.btn {
					border-radius: 5px;
					border: 1px solid #dbdbdb;
					background: #fff;
					height: 30px;
					line-height: 33px;
					span {
						padding: 20px;
					}
					.num {
						padding: 7px 12px;
						font-size: 15px;
						border-top: none;
						border-bottom: none;
					}
				}
				.title {
					font-weight: 700;
				}
				.p {
					margin: 15px;
					input {
						margin-right: 18px;
					}
				}
				.ul-1 {
					display: flex;
					border: 1px solid #eeeeee;
					color: #606266;
					background: #eaf2ff;
					position: relative;
					font-size: 12px;
					height: 105px;
					padding: 40px 20px;
					list-style: none;
					li {
						margin-left: 30px;
						i {
							font-size: 18px;
							color: gray;
							cursor: pointer;
							/*margin-right:10px ;*/
						}
						p {
							padding: 3px 0px;
						}
					}
					.li1 {
						line-height: 85px;
						margin-right: 0px;
					}
					.delete {
						position: absolute;
						right: 35px;
					}
					.title {
						width: 137px;
						p {
							background-color: #ffe8e8;
							color: #ff4b4b;
							width: 54px;
							border-radius: 5px;
							text-align: center;
							padding: 1px;
							margin-top: 6px;
						}
					}
				}
				.later {
					position: relative;
					border: 1px solid #eeeeee;
					margin-top: 20px;
					padding: 10 22px;
					background: white;
					height: 74px;
					font-size: 13px;
					ul {
						padding: 10px 0;
						list-style: none;
						li {
							float: left;
							padding: 15px;
						}
						.delete2 {
							cursor: pointer;
						}
						.delete2:hover {
							color: #009fe8;
						}
					}
					p {
						margin-left: 348px;
					}
					.ying1 {
						margin-top: -8px;
						font-size: 14px;
						position: absolute;
						right: 240px;
						.red {
							color: #ec3838;
							.pri {
								font-size: 21px;
							}
						}
					}
					.ying2 {
						margin-top: 20px;
						color: #999999;
					}
					button {
						width: 170px;
						height: 75px;
						background-color: #009fe8;
						color: #fff;
						font-size: 16px;
						outline: 0;
						border: none;
						position: absolute;
						right: 0;
						top: -0.5px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>