<template>
  <div class="ancientTreesAndFamousTrees-container">
    <div class="w2">
      <div class="last">
       
        <!-- 每一项 -->
       <div class="itemss"  v-for="(item, index) in oTdata.last" :key="index">
          <div class="title imgfull">
            <div class="titletext">{{ item.titletext}}</div>
          </div>
          <TressMap v-if="item.location" :location="item.location" :oTdata="item"></TressMap>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TressMap from '@/components/villageDetails/components/TressMap.vue'
export default {  
  components: {TressMap},
  name: "",
  props: ['id', 'oTdata'],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scpoed>
.ancientTreesAndFamousTrees-container {
    width: 100%;
//   height: 100vh;
  height: 100%;
  background: url("../../../assets/images/bg-top.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .w2 {
    .title {
      width: 139px;
      height: 29px;
      // margin: 80px 0 60px 0;
      margin: 40px auto;
    }
    .last {
    }
  }
}
</style>