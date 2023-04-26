<template>
  <div class="vizenVillageGz-container">
    <div class="title imgfull">
      <img
        class="mainimg"
        src="http://webapp.xiaoheitech.cn/vizen-village-gz/assets/toutu.ada366a4.jpg"
        alt
      />
      <img
        class="titleimg"
        src="http://webapp.xiaoheitech.cn/vizen-village-gz/assets/toutitle.a92a06ed.png"
        alt
      />
    </div>
    <main class="w2">
      <ul class="navul">
        <li
          class="navli"
          :class="index+1==type?'act':''"
          v-for="(item,index) in menu"
          :key="index"
          @click="checkout(item.type)"
        >{{item.name}}</li>
      </ul>
      <GZlist :OTdata="OTdata"></GZlist>
    </main>
    <!-- <span v-for="(i,j) in 500" :key="j">vizenVillageGz测试文本  <br></span> -->
  </div>
</template>
<script>
import vizenVillageGzApi from "@/api/vizenVillageGz.js";
import GZlist from "@/components/vizenVillageGz/GZlist.vue";
export default {
  components: { GZlist },
  name: "",
  props: [],
  data() {
    return {
      OTdata: [],
      menu: [],
      type: 1
    };
  },
  methods: {
    async init_menu() {
      let data = await vizenVillageGzApi.getmenuApi();
      this.menu = data;
    },
    async checkout(type = 1) {
      this.type = type;
      let data = await vizenVillageGzApi.getresourceApi(type);
      this.OTdata = data;
    }
  },
  computed: {},
  watch: {},
  created() {
    this.init_menu();
    this.checkout();
  },
  mounted() {}
};
</script>
<style lang='less' scpoed>
.vizenVillageGz-container {
  width: 100vw;
  background: url("../../../assets/images/bg-top.png") no-repeat;
  background-size: 100% 100%;
  .title {
    position: relative;
    .mainimg {
      height: 380px;
    }
    .titleimg {
      width: 180px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  main {
    .navul {
      display: flex;
      gap: 10px;
      margin: 32px 0;
      .navli {
        padding: 12px 32px;
        border-radius: 12px;
      }
      .act {
        color: #5b502d;
        background: linear-gradient(153deg, #f5f8cf 0%, #f2db9a 100%);
      }
    }
  }
}
</style>