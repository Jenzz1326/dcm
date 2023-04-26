<template>
  <div class="CarouselMap-container"   @click.stop>
    <div class="tag">
      <span v-for="(tags, index) in item.tag" :key="index">{{ tags }}</span>
    </div>
    <div class="swp">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(pics, index) in item.pic" :key="index">
          <div class="items imgfull">
            <img :src="pics.src" alt="" />
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="desc" >{{ item.desc }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "",
  props: ["item","ismodalBox"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>
<style lang='less' scpoed>
.CarouselMap-container {

  .tag span {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 28px;
    background: #435fa3;
    border-radius: 6px;
    padding: 5px 15px;
    margin-right: 12px;
  }
  .swp {
    margin: 12px 0;
    // background-color: #ffffff;
  }
  .desc {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 28px;
    letter-spacing: 2px;
    text-indent: 2em;
    max-height: 476px;
    text-align: left;
    overflow: auto;
  }
}
</style>