<template>
	<div class="navlist">
		<div class="left" @click="golist" >
			<span class=" iconfont" :class="icon1"></span><span class="title">{{title}}</span><span class="el el-icon-arrow-right"></span>
		</div>
		<div class="contentRight">
			<div class="ctxitem" v-for="item,index in data">
				<p class="title">{{item.title}}</p>
				<p class="items">
					<span v-for="zitem in item.zlist">{{zitem.ztitle}}</span>
					<!--<span>ThinkPad E490</span>
					<spaEn>ThinkPad E490</span>
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
		props: ['title', 'icon1', 'data','leftimg','idPath'],
		data() {
			return {
				datas: []
			}
		},
		mounted() {
//			console.log(this.data)
		},
		methods:{
			golist(){
//				console.log(this.idPath)
//				this.$store.state.goodslistPath =this.idPath
				
				this.$store.commit('changGoodslsitPath',this.idPath)
				this.$router.push('/goodslist')
//				console.log(this.$store.state.goodslistPath)

			}
		}
	}
</script>

<style lang="less">
	.contentRight {
		box-shadow: rgba(180, 180, 180, .25) 3px 0 3px 1px;
		width: 748px;
		position: absolute;
		left:200px;
		top: 0;
		padding-top: 30px;
		padding-left: 30px;
		
		background-color: #fff;
		box-sizing: border-box;
		display: none;
		min-height: 420px;
		z-index: 10;
		text-indent: 0px;
		box-sizing: content-box;
		.ctxitem{
			
			.title{
				/*box-sizing: content-box;*/
				line-height: 25px;
				font-size: 14px;
				padding-left: 5px;
				font-weight: 400;
				border-left: 5px solid #009fe8;
			}
			.items{
				width: 600px;
				text-wrap: 1;
				padding: 0 5px;
				/*overflow-wrap: break-word;*/
				/*line-height: 20px;*/
				overflow: hidden;
				span{
					padding: 0 10px;
					border-right: 1px solid #dfdfdf;
					margin-right: 1px;
					font-size: 12px;
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
			width: 200px;
			padding: 5px 0 0 10px;
			border-left: 1px solid #f7f7f7;
			img{
				width:180px;
			}
		}
	}
</style>