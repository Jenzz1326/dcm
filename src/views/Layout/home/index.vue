<template>
  <div class="home-container">
    <!-- ####全景#### -->
    <!-- <video src="/static/home/1.MP4"></video> -->
    <div class="quanjingDark">
      <video src="/static/home/1.MP4" autoplay muted loop></video>
      <div class="titleDark imgfull">
        <img src="../../../assets/images/pcAllnew2.png" alt="" />
      </div>
    </div>
    <!-- ####村咯分布#### -->
    <div class="thirdBP">
      <!-- 分布 -->
      <div class="title imgfull">
        <img src="../../../assets/images/thirdT.png" alt="" />
      </div>
      <!-- 地图 -->
      <div class="amap-labels"></div>
      <!-- 数据展示 -->
      <ul class="running">
        <li v-for="item in running" :key="item.id">
          <div class="animateNum">{{ item.animateNum }}</div>
          <div class="dspan">{{ item.dspan }}</div>
        </li>
      </ul>
    </div>
    <!-- ###村咯精选#### -->
    <div class="secondBP">
      <!-- 分布 -->
      <div class="title imgfull">
        <img src="../../../assets/images/secondT.png" alt="" />
      </div>
      <!-- mpic -->
      <Weizi :secondBPdata="secondBP"></Weizi>
      <!-- 更多 -->
      <div
        class="more imgfull"
        @click="$router.push('/collection')"
        @mouseover="Ishover = !Ishover"
        @mouseleave="Ishover = !Ishover"
      >
        <img v-if="Ishover" src="../../../assets/images/knowmore.png" alt="" />
        <img v-else src="../../../assets/images/nMhover@2x.png" alt="" />
      </div>
    </div>
    <!-- ###建筑风情#### -->
    <div class="fiveBP">
      <!-- 分布 -->
      <div class="title imgfull">
        <img src="../../../assets/images/fiveT.png" alt="" />
      </div>
      <!-- 每一项 -->
      <ul class="fiveUl">
        <li class="itme" v-for="i in 4" :key="i">
          <div class="imgfull">
            <img src="../../../assets/images/fiveImg1.jpg" alt="" />
          </div>
          <div class="fiveImg imgfull">
            <!-- <img src="../../../assets/images/fiveImgt1.png" alt="" /> -->
            <img src="../../../assets/images/nMhover@2x.png" alt="" />
          </div>
        </li>
      </ul>
      <!-- 更多 -->
      <div
        class="more imgfull"
        @mouseover="Ishover = !Ishover"
        @mouseleave="Ishover = !Ishover"
        @click="$router.push('/collection')"
      >
        <img v-if="Ishover" src="../../../assets/images/knowmore.png" alt="" />
        <img v-else src="../../../assets/images/nMhover@2x.png" alt="" />
      </div>
    </div>
    <!-- ####文化集萃#### -->
    <div class="fourthBP">
      <!-- 分布 -->
      <div class="title imgfull">
        <img src="../../../assets/images/fourthT.png" alt="" />
      </div>
      <!-- 轮播图 -->
      <div class="box">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(lbt, index) in mdv" :key="index">
            <div class="items imgfull">
              <img :src="lbt" alt="" />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="buttons">
        <span>自然生态</span>
        <span>自然生态</span>
        <span>自然生态</span>
        <span>自然生态</span>
      </div>
    </div>
    <!-- ###多端互通#### -->
    <div class="sixthBP">
      <div class="duoT">多端互通</div>
      <div class="explain">
        VR、手机、PC、TV、景区大屏… 多终端，全平台自动适配，打造无缝流畅体验。
      </div>
      <div class="duo imgfull">
        <img src="../../../assets/images/duoduan.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Weizi from "@/components/home/Weizi.vue";
import HomeApi from "@/api/home.js";
export default {
  components: { Weizi },
  name: "home",
  props: [],
  data() {
    return {
      swiperOptions: {
        autoplay: true, // 自动轮播
        speed: 1000, // 轮播速度
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionEnd: function () {
            // ...
          },
        },
        // Some Swiper option/callback...
      },
      mdv: [
        "http://webapp.xiaoheitech.cn/vizen-village-gz/images/cul/fs.jpg",
        "http://webapp.xiaoheitech.cn/vizen-village-gz/images/cul/zr.png",
      ], // 存放图片数据的数组
      // 地图展示数据
      running: [],
      //村咯精选
      secondBP: [],
      Ishover: true,
    };
  },
  methods: {
    initMap() {
      //定义地图中心点坐标
      var center = new TMap.LatLng(30.883975, 101.880935);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(document.querySelector(".amap-labels"), {
        center: center, //设置地图中心点坐标
        zoom: 12.2, //设置地图缩放级别
        // pitch: 43.5,  //设置俯仰角
        // rotation: 45    //设置地图旋转角度
      });
      var markerCluster = new TMap.MarkerCluster({
        id: "cluster", //图层id
        map: map, //设置点聚合显示在哪个map对象中（创建map的段落省略）
        enableDefaultStyle: true, //使用默认样式
        minimumClusterSize: 2, //最小聚合点数：2个
        geometries: [
          { position: new TMap.LatLng(30.917409, 101.873825) },
          { position: new TMap.LatLng(30.902944, 101.928359) },
          { position: new TMap.LatLng(30.885507, 101.926812) },
          { position: new TMap.LatLng(30.849926, 101.935465) },
          //....将您所有要打到图中的坐标点传入进来
        ],
        zoomOnClick: true, //点击聚合数字放大展开
        gridSize: 60, //聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，默认为60，以像素为单位
        averageCenter: false, //每个聚和簇的中心是否应该是聚类中所有标记的平均值
        maxZoom: 16, //采用聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
      });
    },
    /**
     * 获取巡回数据
     */
    async getrunning() {
      try {
        this.running = await HomeApi.getrunningApi();
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * 村咯精选
     */
    async getsecondBP() {
      try {
        this.secondBP = await HomeApi.getsecondBPApi();
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  watch: {},
  created() {
    this.getrunning();
    this.getsecondBP();
  },
  mounted() {
    /**
     * 初始化地图
     */
    this.$nextTick(() => {
      this.initMap();
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(3, 1000, false);
    });
  },
};
</script>
<style lang='less' scpoed>
.home-container {
  width: 100%;

  .quanjingDark {
    width: 100%;
    height: 100vh;
    // background: url('../../../assets/images/bgpic2.jpg') no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    video {
      width: 100vw;
      // height: 100%;
      // object-fit: contain;
    }

    video:focus {
      outline: none;
    }

    .titleDark {
      position: absolute;
      width: 718px;
      padding-top: 256px;
    }
  }

  .thirdBP {
    width: 100%;
    background: url("../../../assets/images/thirdBP.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 149px;
      height: 59px;
      margin: 80px 0 60px 0;
    }

    .amap-labels {
      width: 1024px;
      height: 600px;
      background-color: aliceblue;
    }

    .running {
      padding-top: 30px;
      display: flex;
      width: 1024px;
      padding-bottom: 30px;

      li {
        width: 255px;
        height: 128px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: white;

        .animateNum {
          font-size: 60px;
        }

        .dspan {
        }
      }
    }
  }

  .secondBP {
    width: 100%;
    background: url("../../../assets/images/secondBP.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 149px;
      height: 59px;
      margin: 80px 0 60px 0;
    }

    // .mpics {
    //   display: flex;
    //   flex-wrap: wrap;
    //   width: 1098px;
    //   gap: 10px;
    //   margin-bottom: 88px;

    // li {
    //   width: 173px;
    //   height: 278px;
    //   background-color: red;
    //   border-radius: 8px;
    //   overflow: hidden;

    //   .scenicSpotimg {
    //     transition: all .5s;
    //   }

    //   &:hover .scenicSpotimg {
    //     transform: scale(1.1);
    //   }

    //   .dark {
    //     background-color: black;
    //     width: 100%;
    //     height: 100%;
    //     color: white;
    //     font-size: 16px;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: space-between;
    //     padding: 20px 0;

    //     .span1 {
    //       font-size: 12px;
    //     }

    //     .ertu {
    //       width: 86px;
    //       height: 86px;
    //       background-color: white;
    //     }

    //     .go {
    //       width: 92px;
    //       height: 28px;
    //     }
    //   }
    // }
    // }

    .more {
      width: 127px;
      height: 39px;
      margin-bottom: 88px;
    }
  }

  .fiveBP {
    width: 100%;
    // height: 100vh;
    // height: 100%;
    background: url("../../../assets/images/fiveBP.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 149px;
      height: 59px;
      margin: 80px 0 60px 0;
    }

    .fiveUl {
      display: flex;
      width: 1000px;
      flex-wrap: wrap;

      li {
        position: relative;
        overflow: hidden;

        .imgfull {
          width: 500px;
          height: 250px;
          transition: all 0.6s;
        }

        &:hover .imgfull {
          transform: scale(1.1);
        }

        .fiveImg {
          width: 30px;
          height: 152px;
          position: absolute;
          right: 20px;
          top: 15px;
        }
      }
    }

    .more {
      width: 127px;
      height: 39px;
      margin: 88px 0;
    }
  }

  .fourthBP {
    width: 100%;
    // height: 100vh;
    // height: 100%;
    background: url("../../../assets/images/fourthBP.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 149px;
      height: 59px;
      margin: 80px 0 60px 0;
    }

    .box {
      width: 1000px;
      height: 435px;
      background-color: aliceblue;
      overflow: hidden;
      .items {
        height: 435px;
      }
    }

    .buttons {
      display: inline-block;
      margin: 50px 0;

      span {
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
        color: #4a4a4a;
        letter-spacing: 2.47px;
        text-align: center;
      }
    }
  }

  .sixthBP {
    width: 100%;
    height: 100vh;
    // height: 100%;
    background: url("../../../assets/images/sixthBP.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .duoT {
      width: 100%;
      text-align: center;
      margin-top: 95px;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 6px;
    }

    .explain {
      width: 25%;
      margin: 0 auto;
      margin-top: 3%;
      padding: 3px 5px;
      font-size: 12px;
      letter-spacing: 2px;
      text-align: justify;
      line-height: 18px;
      // font-family: PingFangSC-Thin, Arial, sans-serif;
      color: #ffffff;
      opacity: 0.85;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        background: url("../../../assets/images/Path 6 Copy@2x.png");
        background-size: cover;
        width: 11px;
        height: 11px;
        bottom: -1px;
        left: -2px;
      }

      &::before {
        content: "";
        position: absolute;
        background: url("../../../assets/images/Path 6 Copy 2@2x.png");
        background-size: cover;
        width: 11px;
        height: 11px;
        top: 0;
        right: -2px;
      }
    }

    .duo {
      width: 70%;
      margin: 0 auto;
      margin-top: 135px;
    }
  }
}
</style>


<!-- QZXBZ-IX3K3-4WV3Q-R7IKB-TKZW3-XCFL5 -->