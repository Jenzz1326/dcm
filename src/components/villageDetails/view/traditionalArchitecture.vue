<!-- 传统建筑 -->
<template>
  <div class="traditionalArchitecture-container">
    <div class="w2">
      <div class="last">
        <!-- 每一项 -->
        <div class="itemss" v-for="(item, index) in oTdata.last" :key="index">
          <div class="title imgfull">
            <div class="titletext">
              {{ item.title }}
            </div>
          </div>
          <CarouselMap :item="item"> </CarouselMap>
          <!-- <LeftorRightImg
            :direction="item.direction"
            :desc="item.desc"
            :pic="item.pic"
          ></LeftorRightImg> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselMap from "@/components/villageDetails/components/CarouselMap.vue";
export default {
  components: { CarouselMap },
  name: "traditionalArchitecture",
  props: ["id", "oTdata"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>
<style lang='less' scpoed>
.traditionalArchitecture-container {
  width: 100%;
  // height: 100vh;
  height: 100%;
  background: url("../../../assets/images/bg-top.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;

  .last {
    .title {
      width: 139px;
      height: 29px;
      // margin: 80px 0 60px 0;
      margin: 40px auto;
    }
  }
}
</style>