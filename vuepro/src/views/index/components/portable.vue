<template>
  <div>
    <div id="portable" class="itemlistBox" v-for="(itemb,indexb) in portableList" :key="indexb">
      <h1>{{itemb.title}}</h1>
      <ul class="itemlist">
        <li v-for="(itembz,indexbz) in itemb.list" :key="indexbz">
          <router-link to>
            <p>
              <img :src="itembz.imgSrc" />
            </p>
            <p class="commName">
              <span class="newtxtC">{{itembz.dec}}</span>
              <strong>{{itembz.ztitle}}</strong>
              <br />
              <span class="peizhi">{{itembz.des}}</span>
              <br />
              <span class="priceColor">￥{{itembz.price}}/月</span>
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
      portableList: []
    };
  },
  mounted() {
    this.getHoneData("http://localhost:8222/portable");
  },
  methods: {
    getHoneData(path) {
      fetch(path)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.portableList = data;
        })
        .catch(function(e) {
          console.log("oops! error:", e.message);
        });
    }
  }
};
</script>

<style scoped lang="less">
.itemlistBox {
  margin-top: 20px;
  h1 {
    height: 60px;
    line-height: 60px;
  }
  .itemlist {
    overflow-x: scroll;
  }
  ul {
    display: flex;
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
          img {
            width: 170px;
            height: 170px;
          }
          .peizhi {
            color: #332f29;
            font-size: 13px;
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
// 清除浮动
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
</style>