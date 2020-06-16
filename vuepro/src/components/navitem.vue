<template>
	<div class="navlist">
		<div class="left">
			<span class=" iconfont" :class="icon1"></span><span>{{title}}</span><span class="el el-icon-arrow-right"></span>
		</div>
		<div class="contentRight">
			<div class="ctxitem" v-for="item,index in data">
				<p class="title">{{item.title}}</p>
				<p class="items">
					<span v-for="zitem in item.zlist">{{zitem.ztitle}}</span>
					<!--<span>ThinkPad E490</span>
					<span>ThinkPad E490</span>
					<span>ThinkPad E490</span>
					<span>ThinkPad E490</span>-->

				</p>
			</div>
			<div class="contentImg">
				<img v-for="item,index in leftimg" :src="item.imgSrc" />
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "navitem",
		props: ['title', 'icon1', 'data','leftimg'],
		data() {
			return {
				datas: []
			}
		},
		mounted() {
//			console.log(this.data)
		},
	}
</script>

<style lang="less">
	.contentRight {
		box-shadow: rgba(180, 180, 180, .25) 3px 0 3px 1px;
		width: 300px;
		position: absolute;
		left: 80px;
		top: 0;
		padding-top: 10px;
		padding-left: 10px;
		
		background-color: #fff;
		box-sizing: border-box;
		display: none;
		min-height: 170px;
		z-index: 10;
		text-indent: 0px;
		box-sizing: content-box;
		.ctxitem{
			
			.title{
				/*box-sizing: content-box;*/
				line-height: 7px;
				font-size: 5px;
				padding-left: 5px;
				font-weight: 400;
				border-left: 1px solid #009fe8;
			}
			.items{
				width: 180px;
				text-wrap: 1;
				padding: 0 5px;
				/*overflow-wrap: break-word;*/
				/*line-height: 20px;*/
				overflow: hidden;
				span{
					padding: 0 3px;
					border-right: 1px solid #dfdfdf;
					margin-right: 1px;
					font-size: 4px;
					color: #666666;
					
				}
				span:last-of-type{
					border: none;
				}
				span:hover{
					color: #31b1ec;
					cursor: pointer;
				}
			}
			
		}
		.contentImg{
			position: absolute;
			right: 0;
			top: 0;
			height: 100%;
			width: 70px;
			padding: 5px 0 0 2px;
			border-left: 1px solid #f7f7f7;
			img{
				width:65px;
			}
		}
	}
</style>