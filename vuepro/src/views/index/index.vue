<template>
  <div>
    <div class="box">
      <div class="top-layout-center">
        <div class="bannerbox">
          <div class="banner">
            <el-carousel height="330px">
              <el-carousel-item>
                <img src="../../assets/images/banner/banner1.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner2.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner3.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner4.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner5.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner6.png" />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banner/banner7.png" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="navitem">
            <ul>
              <li v-for="(item,index) in navlist" :key="index">
                <a>
                  <img :src="item.url" />
                  <br />
                  <span>{{item.title}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="XXUz">
          <div class="toplogin">
            <div class="user-welcome">
              <p>Hi~ 欢迎来到小熊U租</p>
              <p>
                <router-link class="active" to="/login" v-show="!userShow">登录</router-link>
                <router-link to="/register" v-show="!userShow">注册</router-link>
                <span v-show="userShow">{{username}}</span>
                <span v-show="userShow" class="quit" @click="quit">退出登录</span>
              </p>
            </div>
          </div>
          <div class="XXgg">
            <h4>---------------小熊公告---------------</h4>
            <p>小熊U租获京东数千万元A+轮融资，实现与京东产业链深度融合小熊U租获京东数千万元A+轮融资，实现与京东产业链深度融合</p>
            <p>小熊U租为3万家企业授小熊U租获京东数千万元A+轮融资，实现与京东产业链深度融合小熊U租获京东数千万元A+轮融资，实现与京东产业链深度融合397亿</p>
            <p>小熊U租创始人胡祚雄获“年度中国企业服务领军人物”称号</p>
            <p>杭州分公司开业，小熊U租业务版图再添新坐标</p>
            <p>小熊U租联合腾讯、平安银行等创立广东省企业风险管理研究会</p>
            <h4>---------------小熊热线---------------</h4>
            <p>售前热线：400-843-7432</p>
            <p>售后热线：400-843-7432</p>
          </div>
        </div>
      </div>
      <benyuetuijian></benyuetuijian>
      <hotItem></hotItem>
      <administration></administration>
      <technology></technology>
      <graphic></graphic>
      <portable></portable>
      <cooperation></cooperation>
    </div>
  </div>
</template>

<script>
import benyuetuijian from "./components/benyuetuijian";
import hotItem from "./components/hotItem";
import administration from "./components/administration";
import technology from "./components/technology";
import graphic from "./components/graphic";
import portable from "./components/portable";
import cooperation from "./components/cooperation";

export default {
  name: "index",
  data() {
    return {
      navlist: [
        {
          title: "免押金",
          url: require("../../assets/images/indeximg/icon6.png")
        },
        {
          title: "1台起租",
          url: require("../../assets/images/indeximg/icon1.png")
        },
        {
          title: "即租即还",
          url: require("../../assets/images/indeximg/icon2.png")
        },
        {
          title: "租金月付",
          url: require("../../assets/images/indeximg/icon3.png")
        },
        {
          title: "上门服务",
          url: require("../../assets/images/indeximg/icon4.png")
        },
        {
          title: "安全保障",
          url: require("../../assets/images/indeximg/icon5.png")
        }
      ],
      userShow:true,
      username:''
    };
  },
  components: {
    benyuetuijian,
    hotItem,
    administration,
    technology,
    graphic,
    portable,
    cooperation,
    
  },
  mounted(){
  		if(JSON.parse(sessionStorage.getItem('username'))){
  				this.userShow = JSON.parse(sessionStorage.getItem('usernamestatus'))
    			this.username = JSON.parse(sessionStorage.getItem('username'))
    			this.$store.state.loginStatus  = true
  		
	    }else{
	    	this.$store.state.loginStatus  = false
	    		this.userShow = false
	    	}
	    this.$store.state.lihash = window.location.hash
//			console.log(window.location.hash,this.$store.state.lihash)
  },
  methods:{
  	quit(){
  		sessionStorage.removeItem("username");
  		sessionStorage.removeItem("usernamestatus");
  		this.userShow = false
  		this.$store.state.loginStatus  = false
  		
  	}
  }
};

</script>

<style lang="less" scoped>
.box {
  background: #fff;
  padding: 0px 130px;
  .quit{
  	color: #458ee7;
  }
  .top-layout-center {
    padding: 0 240px 0 230px;
    margin-bottom: 30px;
    box-sizing: border-box;
    position: relative;
    .banner {
      .el-carousel__item {
        img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
        }
      }
    }
    .navitem {
      margin-top: 15px;
      ul {
        display: flex;
        justify-items: center;
        li {
          text-align: center;
          flex: 1;
          list-style: none;
          a {
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .XXUz {
    position: absolute;
    right: -10px;
    top: 0px;
    width: 240px;
    height: 438px;
    .XXgg {
      padding: 0 10px;
      text-align: center;
      p {
        line-height: 30px;
        color: #625849;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .toplogin {
      padding: 30px;
      text-align: center;
      widows: 100%;
      height: 120px;
      background: url(../../assets/images/v1-9_bg_layout_right.png) 0px 0px
        no-repeat;
      background-size: 100%;
      .user-welcome {
        border-radius: 5px;
        box-shadow: 0px 3px 3px #008ec0;
        height: 125px;
        line-height: 49px;
        width: 180px;
        background: #fff;
        p {
          font-size: 15px;
          .active {
            color: #59a5e1;
          }
          a {
            color: #430031;
            text-decoration: none;
            font-size: 14px;
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>>
body {
  background: #f7f7f7;
}
</style>