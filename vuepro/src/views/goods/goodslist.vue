<template>
	<div class="goodslist">
		<sx></sx>
		<div class="ctxBox clearfloat" >
			<div class="paixu">
				<div class="pxLeft">
					<span  @click="dprice" :class="{active:isActive==1}">默认排序</span>
					<span @click="hprice" :class="{active:isActive==2}">价格由低到高</span>
					<span @click="rprice" :class="{active:isActive==3}">价格由高到低</span>
				</div>
				<div class="pxRight">
					<span><span class="active">{{currentPage}}</span>&nbsp;/&nbsp;{{totalPage}}</span>
					<span @click="prevPage" class="el-icon-arrow-left" :class="{active:currentPage==totalPage}"></span>
					<span @click="nextPage" class="el-icon-arrow-right" :class="{active:totalPage<currentPage>=1}"></span>
					
				</div>
			</div>
			<div class="box clearfloat">
				<div class="ctxitem clearfloat" v-for="item,index in currentPageData" :class="{clearMarginLeft:index % 4 == 0}">
					<img :src="item.imgSrc"/>
					<p class="title">{{item.title}}</p>
					<p class="price"><span>￥</span>{{item.price}}<span>/月</span></p>
				</div>
			</div>
			<div class="page">
				<span @click="prevPage" class="el-icon-arrow-left" :class="{gray:currentPage==1}"></span>
				<span v-for="item,index in pages" :class="{active:item==currentPage}" @click="setCurrPage(item)">{{item}}</span>
				<span @click="nextPage" class="el-icon-arrow-right" :class="{gray:currentPage==totalPage}"></span>
				<span class="allpage">共{{totalPage}}页</span>
				<input type="text"  v-model="choosePage"/>
				<span class="changePage" @click="changePage">跳转</span>
			</div>
		</div>

	</div>
</template>

<script>
	import sx from './saixuan.vue'
	export default {
		name: "goodslist",
		components: {
			sx
		},
		data() {
			return {
				productList:[], //所有数据
				showItem:5,//显示页数
	            totalPage: 10, // 统共页数，默认为1
	            currentPage: 1, //当前页数 ，默认为1
	            pageSize: 16, // 每页显示数量
	            currentPageData: [],
	            choosePage:'',//当前页显示内容
	            isActive:1,
	            
			}
		},
		watch:{
			'$store.state.goodslistPath'(){
				this.getHoneData("http://localhost:8222/"+this.$store.state.goodslistPath);
			}
		},
		computed:{
			pages:function(){
				let arr = []
				if(this.currentPage <this.showItem){
					let mini = Math.min(this.showItem,this.totalPage)
					for(let i=1;i<=mini;i++){
						arr.push(i)
					}
				}else{
					let start = this.currentPage - Math.floor(this.showItem/2);
					if(start>=this.totalPage-this.showItem){
						start = this.totalPage-this.showItem+1;
					}
					for(let i=1;i<=this.showItem;i++){
						arr.push(start++)
					}
				}
//				console.log(arr)
				return arr
				
			},
		},
		methods: {
			 getCurrentPageData() {
	            let begin = (this.currentPage - 1) * this.pageSize;
	            let end = this.currentPage * this.pageSize;
	            this.currentPageData = this.productList.slice(
	                begin,
	                end
	            );
	       },
			prevPage(){
				console.log(this.currentPage);
	            if (this.currentPage == 1) {
	                return false;
	            } else {
	                this.currentPage--;
	                this.getCurrentPageData();
	            }

			},
			nextPage(){
				console.log(this.currentPage);
	            if (this.currentPage == this.totalPage) {
	                return false;
	            } else {
	                this.currentPage++
	                this.getCurrentPageData();
	            }
			},
			getHoneData(path) {
				fetch(path)
					.then(res => res.json())
					.then(data => {
						this.productList =data
							this.totalPage = Math.ceil(this.productList.length / this.pageSize);
							this.totalPage = this.totalPage == 0 ? 1:this.totalPage
							this.getCurrentPageData()
										
					})
					.catch(function(e) {
						console.log("oops! error:", e.message);
					}); 
			},
			setCurrPage(val){
				this.currentPage = val
				this.getCurrentPageData()
			},
			changePage(){
				if(!typeof this.choosePage == Number){
					return false
				}else if(this.choosePage == ''){
					return false
				}else{
					this.currentPage = this.choosePage
					this.getCurrentPageData()
				}

			},
			
			hprice(){
				
				function sorRule(a,b){
					return a.price -b.price
				}
				this.currentPageData.sort(sorRule)
				this.isActive = 2
			},
			rprice(){
				
				function sorRule(a,b){
					return b.price -a.price
				}
				this.currentPageData.sort(sorRule)
				this.isActive = 3
			},
			dprice(){
				this.getCurrentPageData()
				this.isActive = 1
			}
			
		},
		created() {
			this.getHoneData("http://localhost:8222/"+this.$store.state.goodslistPath);
		},
		
	}
</script>

<style scoped lang="less">
	.goodslist {
		padding: 10px 130px;
		.ctxBox{
			width: 100%;
			padding: 0 0 100px 0;
			margin:  auto;
			position:relative;
			.paixu{
				height: 50px;
				/*line-height: 50px;*/
				background: #fff;
				margin: 20px 0;
				.pxLeft{
					float: left;
					span{
						display: inline-block;
						line-height: 50px;
						width: 150px;
						text-align: center;
						cursor: pointer;
					}
					.active{
						background: #009fe8;
						color: #fff;
					}
				}
				.pxRight{
					float: right;
					width: 200px;
					line-height: 50px;
					
					>span{
						margin: 0 20px;
						/*color: #cccccc;*/
						cursor: pointer;
					}
					.active{
							color: #009fe8;
					}
					.gray{
						color: #cccccc;
					}
				}
			}
			.box{
				.clearMarginLeft{
					margin-left: 0px!important;
				}
				.ctxitem{
					float: left;
					background: #ffffff;
					margin: 5px 0;
					text-align: center;
					margin-left: 17px;
    				width: 302px;
					padding:10px;
					box-sizing: border-box;
					img{
						width: 200px;
						
					}
					.title{
						line-height: 20px;
						font-size: 12px;
						text-align: left;
						height: 50px;
					}
					.price{
						margin: 20px 0;
						text-align: left;
						color: red;
						font-weight: 700;
						font-size: 18px;
						span{
							font-weight: 700;
							font-size: 12px;
						}
					}
				}
				.ctxitem:hover{
				    box-shadow: rgba(180,180,180,.25) 0 0 3px 3px;
			}
			}
			
			.page{
				position:absolute ;
				bottom:10px ;
				left: 50%;
				width: 612px;
				transform: translateX(-50%);
				span{
					display: inline-block;
					width: 30px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					box-sizing: content-box;
					background-color: #fff;
					color: #019fe8;
					margin:0 10px;
				}
				.active{
					background: #009fe8;
					color: #fff;
				}
				.gray{
					background: #e5e5e5;
					color: #b1b1b1;
				}
				.allpage{
					width: 50px;
					background: none;
					color: #666666;
				}
				input{
					width: 50px;
					height: 28px;
					text-align: center;
				}
				.changePage{
					width: 50px;
					cursor: pointer;
				}
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