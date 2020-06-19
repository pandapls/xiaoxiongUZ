<template>
	<div class="specialBox">
		<div class="specialImg">
			<img src="../../assets/images/special/act_special_content_banner.png"/>
		</div>
		<div class="wrap" v-for="item,index in specialData">
			<p class="title"><span class="titletxt">{{item.title}}</span><span class="pinkbg"></span></p>
			<div class="items clearfloat">
				<div class="item" v-for="zitem,zindex in item.list">
					<img :src="zitem.imgSrc"/>
					<p class="ztitle">{{zitem.ztitle}}</p>
					<p class="dec">{{zitem.dec}}</p>
					<p class="jiage">
						<span class="nowprice"><span>￥</span>{{zitem.nowprice}}<span>/月</span></span> 
						<span class="oldprice">￥{{zitem.price}}/月</span> 
						
						<button class="nowbtn">立即租凭</button>
					</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"special",
		data(){
			return {
				specialData:[]
			}
		},
		mounted(){
			this.getHoneData("http://localhost:8000/special");
		},
		methods:{
			getHoneData(path) {
				fetch(path)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						this.specialData =data

					})
					.catch(function(e) {
						console.log("oops! error:", e.message);
					}); 
			},
		},
		
	}
</script>

<style lang="less"  scoped>
	.specialBox{
		background-color: #f9f9f9;
   		 padding-bottom: 50px;

		.specialImg{
			height: inherit;
			img{
				width: 100%;
   				 display: block;
			}
		}
		.wrap{
			text-align: center;
			padding: 40px 130px;
			.title{
				position: relative;
				height: 36px;
				margin:20px 0;
				.titletxt{
					font-size: 36px;
				    text-align: center;
				    font-weight: 400;
				    font-stretch: normal;
				    line-height: 36px;
				    letter-spacing: 0;
				    color: #2d2d2d;
					position: absolute;
					  z-index: 2;
					  left: 50%;
					  top: 50%;
					  transform: translate(-50%,-50%);
				}
				.pinkbg{
					    display: inline-block;
					    width: 166px;
					    height: 16px;
					    background-color: #ffe3da;
					    border-radius: 8px;
					    position: absolute;
					    left: 50%;
					    transform: translateX(-50%);
					    bottom: 2px;
					    z-index: 1;
				}
			}
			.items{
				width: 100%;
				margin: 50px 0;
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
	}
	
	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}
</style>