<template>
  <div class="LeftorRightImg-container">
    <div class="left" v-if="direction == 'left'">
      <div class="imgitem">
        <img :src="pic" alt="">
      </div>
      <div class="text-content">
        <div class="text">
          {{ desc }}
        </div>
      </div>
    </div>
    <div class="right" v-else-if="direction == 'right'">
      <div class="imgitem">
        <img :src="pic" alt="">
      </div>
      <div class="text-content">
        <div class="text">
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "",
  props: ["direction", "desc", "pic"],
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
.LeftorRightImg-container {
  height: 320px;
  // background-color: red;
  position: relative;

  .imgitem {
    img {
      width: 576px;
      height: 320px;
    }
  }


  .text {
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 28px;
    letter-spacing: 2px;
    text-indent: 2em;
  }

  .left {
    .text-content {
      position: absolute;
      background: url('../../../assets/images/template-content-img-text-right.png') no-repeat;
      background-size: 100% 100%;
      left: 0;
      top: 0;
      bottom: 0;
      padding: 48px;
      padding-left: 320px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .right {
    display: flex;
    justify-content: end;

    .imgitem {}

    .text-content {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: url('../../../assets/images/template-content-img-text-left.png') no-repeat;
      background-size: 100% 100%;
      padding: 48px;
      padding-right: 320px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>