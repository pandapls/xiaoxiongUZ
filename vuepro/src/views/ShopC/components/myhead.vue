<template>
  <div class="myhead">
    <div class="headmid">
      <div class="xxicon"  @click="goIndex"></div>
      <div class="headsearch">
        <input type="text" class="searchinput" />
        <button class="searchbtn">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import navitem from "../../../components/navitem";

export default {
  name: "myhead",
  components: {
    navitem
  },
  data() {
    return {
      icons: [
        "icon-xingzhuang",
        "icon-PCtaishiji",
        "icon-yitiji",
        "icon-xianshiqi",
        "icon-pingbandiannao-",
        "icon-shouji54",
        "icon-xingxing",
        "icon-printer",
        "icon-dengguangyaokongqibeifen"
      ]
    };
  },
  mounted: function() {},

  methods: {
  	goIndex(){
				this.$router.push('/index')
			}
  }
};
</script>

<style lang="less">
@import url("../../../assets/iconfont/iconfont.css");

.myhead {
  /*padding: 0 30px;*/
  background: #fff;
  .headtop {
    background: #f5f5f5;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    padding: 10px 60px;
    .hdrightbox {
      > span {
        display: inline-block;
        margin: 0 10px;
        span {
          color: #1caaeb;
          font-weight: 700;
        }
      }
      .login {
        a {
          color: #49bbef;
          text-decoration: none;
          margin: 0 3px;
        }
      }
      .order {
        a {
          text-decoration: none;
          color: #716666;
          margin: 0 3px;
        }
      }
    }
  }
  .headmid {
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    /*align-content: space-around;*/
    margin: 10px 0;
    .xxicon {
      width: 180px;
      height: 80px;
      /*zoom: 0.4;*/
      background: url(/img/product-list-v1-9.404cb190.png) 0px 0px no-repeat;
    }
    .headsearch {
      width: 500px;
      height: 40px;
      border: 3px solid #009fe8;
      border-radius: 25px;
      margin: auto 0;
      position: relative;
      .searchinput {
        width: 350px;
        height: 38px;
        outline: none;
        font-size: 12px;
        position: absolute;
        border-radius: 18px;
        border: none;
        left: 10px;
        top: 0px;
        text-indent: 5px;
      }
      .searchbtn {
        position: absolute;
        right: -2px;
        height: 40px;
        width: 100px;
        background: #009fe8;
        color: #fff;
        border: none;
        border-radius: 20px;
        font-size: 5px;
        top: 0px;
      }
      .list {
        position: absolute;
        bottom: -20px;
        font-size: 12px;
        left: 10px;
        span {
          display: inline-block;
          margin: 0px 3px;
          color: #9f9e9d;
        }
      }
    }
    .shopp {
      position: relative;
      margin: auto 0;
      i {
        position: absolute;
        top: 12px;
        left: 5px;
        color: #009fe8;
        font-size: 14px;
      }
    }
    .shopbtn {
      font-size: 12px;
      background: #fff;
      padding: 10px 25px;
      border: 2px solid #009fe8;
      border-radius: 20px;
    }
  }
  .nav_1 {
    z-index: 20;
    padding: 30px 60px;
    list-style: none;
    display: flex;
    font-size: 14px;
    > li {
      /*border:1px solid #009fe8;*/
      width: 150px;
      text-align: center;
      line-height: 40px;
    }
    /*li:nth-of-type(1):hover{
				.nav_2{
					display: block;
				}
			}*/
    > li:nth-of-type(1) {
      width: 200px;
      text-align: left;
      text-indent: 20px;
      background: #009fe8;
      color: #fff;
      position: relative;

      .nav_2 {
        z-index: 20;
        position: absolute;
        top: 50px;
        left: 0;

        .navlist {
          width: 200px;
          line-height: 40px;
          background: #ffffff;
          color: black;
          .left {
            position: relative;
            line-height: 50px;
            width: 200px;
            .title {
              margin: 0 25px;
            }
            .iconfont {
              font-size: 16px;
              position: absolute;
              left: 0px;
            }
            .el {
              position: absolute;
              font-size: 5px;
              right: 5px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
        .navlist:hover {
          .left {
            color: #4dc5f4;
          }
          background: #eff9fd;
          .contentRight {
            display: block;
          }
        }
      }
    }
  }
}
</style>