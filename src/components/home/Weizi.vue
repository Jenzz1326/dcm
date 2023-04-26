<template>
  <ul class="mpics">
    <Weiziitem v-for="item in secondBPdata" :itemdata="item" :key="item.id"></Weiziitem>
  </ul>
</template>
<script>
import Weiziitem from "@/components/home/Weiziitem.vue"
export default {
  components: { Weiziitem },
  name: "weizi",
  props: ["secondBPdata"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
};
</script>
<style lang='less' scpoed>
.mpics {
  display: flex;
  flex-wrap: wrap;
  width: 1098px;
  gap: 10px;
  margin-bottom: 88px;
}
</style>