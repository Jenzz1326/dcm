<template>
  <div class="LeftorRightImg2-container clearfix">
    <!-- 图片 -->
    <div class="imgitem imgfull " :class="direction == 'left' ? 'fleft' : 'fright'">
      <img :src="pic" alt="">
    </div>
    <!-- 文章 -->
    <div class="text-content  " :class="direction == 'right' ? 'fright' : 'fleft'">
      <div class="text">
        <span v-for="(item, index) in tag" :key="index">{{ item }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <br>
        {{ desc }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "",
  props: ["direction", "desc", "pic", "tag"],
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
<style lang='less' scoped>
.LeftorRightImg2-container {
  width: 100%;
  height: 360px;
  overflow: hidden;

  .imgitem {
    width: 640px;

    img {
      height: 360px;
    }
  }

  .text-content {
    width: 560px;
    height: 360px;
    background: url('../../../assets/images/template-content-img-text-2-content-bg.png') no-repeat;
    background-size: 100% 100%;
    padding: 60px;

    .text {

      height: 360px;
      font-size: 14px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 28px;
      letter-spacing: 2px;
      text-indent: 2em;
      overflow-y: scroll;
    }
  }
}
</style>