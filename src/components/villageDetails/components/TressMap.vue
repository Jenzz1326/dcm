<template>
  <div class="TressMap-container">
    <!-- 模态框 -->
    <div class="modalBox" v-if="Isshowmodal" @click.stop="Isshowmodal=false">
      <div class="modalBoxcontainer">
        <CarouselMap  :item="oTdata" :ismodalBox="true"></CarouselMap>
      </div>
    </div>
    <!-- 模态框结束 -->
    <div  ref="amapLabels"></div>
  </div>
</template>
<script>
import CarouselMap from "@/components/villageDetails/components/CarouselMap.vue";
export default {
  components: { CarouselMap },
  name: "",
  props: ["location", "oTdata"],
  data() {
    return {
        Isshowmodal:false,
    };
  },
  methods: {
    initMap() {
      //定义地图中心点坐标
      var center = new TMap.LatLng(
        this.location[0].latitude,
        this.location[0].longitude
      );
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(this.$refs.amapLabels, {
        center: center, //设置地图中心点坐标
        zoom: 12.2, //设置地图缩放级别
        // pitch: 43.5,  //设置俯仰角
        // rotation: 45    //设置地图旋转角度
        baseMap: {  // 设置卫星地图
                  type: 'satellite'
                }
      });
      let gemedata = []; 
      this.location.forEach(item => {
        gemedata.push({
          position: new TMap.LatLng(item.latitude, item.longitude),
          id: item.id,
          pic: item.pic,
        });
      });
      var markerCluster = new TMap.MarkerCluster({
        id: "cluster", //图层id
        map: map, //设置点聚合显示在哪个map对象中（创建map的段落省略）
        enableDefaultStyle: true, //使用默认样式
        minimumClusterSize: 2, //最小聚合点数：2个
        geometries: gemedata, //聚合点数据
        zoomOnClick: true, //点击聚合数字放大展开
        gridSize: 60, //聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，默认为60，以像素为单位
        averageCenter: false, //每个聚和簇的中心是否应该是聚类中所有标记的平均值
        maxZoom: 16 //采用聚合策略的最大缩放级别，若地图缩放级别大于该值，则不进行聚合，标点将全部被展开
      });
      markerCluster.on("click", this.onclickcoordinate);
    },
    onclickcoordinate(e) {
        this.Isshowmodal= true;
    }
  },
  computed: {
  },
  watch: {
  },
  created() {},
  mounted() {
    /**
     * 初始化地图
     */
    this.$nextTick(() => {
      this.initMap();
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(3, 1000, false);
    });
  }
};
</script>
<style lang='less' scpoed>
.TressMap-container {
  .modalBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
    .modalBoxcontainer{
            width: 60vw;
            height: 60vh;
            background-color: white;
            padding: 32px;
            border-radius: 23px;
    }
  }
}
</style>