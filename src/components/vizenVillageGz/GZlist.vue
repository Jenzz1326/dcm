<template>
  <div class="GZlist-list-container">
    <ul class="waterfall">
      <li v-for=" (item,index) in OTdata" :key="index">
        <Gzitem :item="item"></Gzitem>
      </li>
    </ul>
  </div>
</template>
<script>
import Gzitem from "@/components/vizenVillageGz/GZitem.vue";
export default {
  components: { Gzitem },
  name: "GZlist",
  props: ["OTdata"],
  data() {
    return {};
  },
  methods: {},
  computed: {
  },
  watch: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scpoed>
.waterfall {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  li{
    width: 375px;
    height: 375px;
    overflow: hidden;
  }
}
</style>