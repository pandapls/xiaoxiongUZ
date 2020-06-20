<template>
	<div class="sx">
		<h5 class="alltitle">
			全部商品:<span class="choose" v-for="value,i in choose">{{value}} <i class="el-icon-close" v-on:click="delet(i)"></i></span>
		</h5>
		<div class="sxBox">
			<div class="itemBox" v-for="item,index in sxData">
				<span class="title">{{item.name}}：</span>
				<span class="items" v-for="zitem,zindex in item.list" @click="getId(item,zitem,index,zindex)" :class="{active:item.index==zindex}">{{zitem.title}}</span>
			</div>
		</div>
		<span class="moreBtn " :class="hasShow?'el-icon-arrow-up':'el-icon-arrow-down'" @click="loadmore($event)"></span>
	</div>
</template>

<script>
	export default {
		name: 'saixuan',
		data() {
			return {
				sxData: [],
				xrPath: 'moren',
				choose: {},
				hasShow: false,
				noChose: true,
				inx: null
			}
		},
		mounted: function() {
			this.getHoneData("http://localhost:8222/moren");
			this.$store.dispatch('getData')
		
		},
		methods: {
			getHoneData(path) {
				fetch(path)
					.then(res => res.json())
					.then(data => {
						this.sxData = data
					})
					.catch(function(e) {
						console.log("oops! error:", e.message);
					});
			},
			getId(item, zitem, index, zindex) {	
				this.$store.dispatch('getData')	
				
				if(zitem.id == undefined) {
					this.$set(this.choose, index, zitem.title)
					this.sxData[index].index = zindex
					
					return;
				}
				this.$store.state.saixuanPath = zitem.id
				this.sxData = this.$store.state.data
				this.choose = {}
				this.$set(this.choose, index, zitem.title)
				
				
				this.sxData[index].index = zindex
				this.$store.commit('changGoodslsitPath', zitem.goodslist)
				
				

			},
			delet(i) {
				this.$delete(this.choose, i)
				this.sxData[i].index = -1
				console.log(i)
				if(i == 0) {
					this.choose = {}
					this.getHoneData("http://localhost:8222/moren")
					this.$store.commit('changGoodslsitPath', 'default')
						this.$store.state.saixuanPath = 'moren'
				}
			},
			loadmore(el) {
				this.hasShow = !this.hasShow
				if(this.hasShow) {
					el.currentTarget.previousElementSibling.style.height = "460px"
				} else {
					el.currentTarget.previousElementSibling.style.height = "280px"
				}
			}
		}
	}
</script>

<style lang="less">
	.sx {
		/*height: 300px;
		overflow: auto;*/
		position: relative;
		.alltitle {
			font-size: 12px;
			font-weight: 400;
			.choose {
				padding: 5px 10px;
				border: 1px solid #dfdfdf;
				background: #fff;
				margin: 0 10px;
			}
		}
		.sxBox {
			height: 280px;
			overflow: hidden;
			margin: 10px 0;
			background: #fff;
			font-size: 13px;
			transition: all 1s;
			.itemBox {
				padding: 15px 10px;
				.title {
					display: inline-block;
					color: #a69f9e;
					width: 80px;
					cursor: pointer;
				}
				.items {
					cursor: pointer;
					margin: 0 20px;
				}
				.items:hover {
					color: #009fe8;
				}
				.active {
					color: #009fe8;
				}
			}
		}
		.moreBtn {
			position: absolute;
			left: 50%;
			bottom: 20px;
			transform: translateX(-50%);
		}
	}
</style>