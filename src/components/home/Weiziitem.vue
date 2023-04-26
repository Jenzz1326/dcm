<template>
  <li class="imgfull Weiziitem" @mouseover="showTwo" @mouseleave="hideTwo">
    <img
      ref="dark"
      class="scenicSpotimg"
      :src="itemdata.scenicSpotimg"
      :style="{ display: !show ? 'block' : 'none' }"
      alt=""
    />
    <!-- 遮罩 -->
    <div class="dark">
      <p>{{ itemdata.p }}</p>
      <span class="span1">{{ itemdata.span1 }}</span>
      <br />
      <!--二维码边框-->
      <div class="ertu">
        <!--动态生成的二维码-->
        <img :src="qrCodeUrl" alt="QR Code" />
      </div>
      <!-- <span class="span2">扫码手机观看</span> -->
      <div
        class="imgfull go"
        @click="uigo()"
        @mouseover="Ishover = !Ishover"
        @mouseleave="Ishover = !Ishover"
      >
        <img v-if="Ishover" src="../../assets/images/enterfarm.png" alt="" />
        <img v-else src="../../assets/images/enterfarmhover@2x.png" alt="" />
      </div>
    </div>
  </li>
  <!-- <div class="all">
    <div class="one"></div>
    <div class="two"></div>
  </div> -->
</template>
<script>
import QRCode from "qrcode";
export default {
  components: {},
  name: "",
  props: ["itemdata"],
  data() {
    return {
      show: false,
      qrCodeUrl: "",
      Ishover: true,
    };
  },
  methods: {
    //跳转到villageDetails
    uigo() {
      this.$router.push({
        path: `/villageDetails/${this.itemdata.id}/`, // TOD 提交乡村id
        query: {
          relationVillageName: this.itemdata.p,
          slogan: this.itemdata.span1,
          // panoimg: this.itemdata.panoimg
        },
      });
    },
    // 网址转二维码
    generateQRCode(text) {
      console.log(text);
      QRCode.toDataURL(text)
        .then((url) => {
          this.qrCodeUrl = url;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    showTwo() {
      this.show = true;
    },
    hideTwo() {
      this.show = false;
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.generateQRCode(this.itemdata.ewm);
  },
};
</script>
<style lang='less' scpoed>
.Weiziitem {
  width: 173px;
  height: 278px;
  // background-color: red;
  border-radius: 8px;
  overflow: hidden;

  .scenicSpotimg {
    transition: all 0.5s;
  }

  &:hover .scenicSpotimg {
    transform: scale(1.1);
  }

  .dark {
    background-color: black;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    .span1 {
      font-size: 12px;
    }

    .ertu {
      width: 86px;
      height: 86px;
      background-color: white;
    }

    .go {
      width: 92px;
      height: 28px;
    }
  }
}
</style>