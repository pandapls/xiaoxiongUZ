<template>
  <div>
    <div id="benyuetuijian" class="itemlistBox" v-for="(itemb,indexb) in BYTJlist" :key="indexb">

      <h2>本月推荐</h2>
      <ul class="itemlist">
        <li v-for="(itembz,indexbz) in itemb.list" :key="indexbz" @click="goDetail(itembz)">
          <router-link to>
            <p class="commName">
              <span class="newtxtC">{{itembz.dec}}</span>
              <strong>{{itembz.ztitle}}</strong>
              <br />
              <span class="priceColor">￥{{itembz.price}}/月</span>
            </p>
            <p>
              <img :src="itembz.imgSrc" />
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 本月推荐数据
      BYTJlist: []
    };
  },
  mounted() {

    this.getHoneData("http://localhost:8222/benyuetuijian");

  },
  methods: {
    getHoneData(path) {
      fetch(path)
        .then(res => res.json())
        .then(data => {
//        console.log(data);
          this.BYTJlist = data;
        })
        .catch(function(e) {
          console.log("oops! error:", e.message);
        });
    },
    goDetail(val){
    	console.log(val.id)
    	this.$router.push('/detail')
    	this.$store.state.goodDedetail =  val.id
    }
  }
};
</script>

<style scoped lang="less">
.itemlistBox {

  h2 {
    height: 60px;
    line-height: 60px;
  }
  .itemlist {
    /*overflow-x: scroll;*/
  }
  ul {
    display: flex;

    li:hover {
      box-shadow: 0px 0px 8px gainsboro;
    }
    li {
      padding: 25px 40px;
      line-height: 28px;
      border-radius: 5px;
      background: #fff;
      margin-right: 11px;
      a {
        text-decoration: none;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #404858;
          text-align: center;
          .priceColor {
            color: #fe5549;
            font-weight: 700;
          }
          .peizhi {
            color: #332f29;
            font-size: 13px;
          }
          img {
            width: 170px;
            height: 170px;
          }
        }
      }
      list-style: none;
      .newtxtC {
        vertical-align: 2px;

        padding: 0 3px;
        background: #fe4941;
        border-radius: 3px;
        font-size: 13px;
        color: #fff;
      }
    }
  }
}
</style>