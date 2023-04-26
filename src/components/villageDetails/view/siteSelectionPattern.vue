<!-- 选址格局 -->
<template>
  <div class="siteSelectionPattern-container">
    <div class="w2">
      <div class="fist">
        <div class="title imgfull">
          <div class="titletext">
            {{ oTdata.fist.title }}
          </div>
        </div>
        <div
          class="imgfull fistImgul"
          v-for="(src, index) in oTdata.fist.pic"
          :key="index"
        >
          <img :src="src" alt="" />
        </div>
        <p>{{ oTdata.fist.desc }}</p>
      </div>
      <div class="last">
        <!-- 每一项 -->
        <div class="itemss" v-for="item in oTdata.last" :key="item.id">
          <div class="title imgfull">
            <div class="titletext">
              {{ item.title }}
            </div>
          </div>
          <LeftorRightImg
            :direction="item.direction"
            :desc="item.desc"
            :pic="item.pic"
          ></LeftorRightImg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftorRightImg from "@/components/villageDetails/components/LeftorRightImg.vue";
export default {
  components: { LeftorRightImg },
  name: "siteSelectionPattern",
  props: ["id", "oTdata"],
  data() {
    return {
      //       oTdata: {
      //         fist: {
      //           id: 1,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/LOCATION.png',
      //           desc: `选址特点：季刀村依山而居，沿水而建，依山傍水，风景美丽，民族风情纯朴、浓郁，具有得天独厚和优越的地理环境位置，是巴拉河苗族聚居的旅游村寨。
      // 形成背景：最早一支潘姓苗人原住在江西的朱市巷，后迁至湖南洞庭湖一带，再后来又迁至天柱，此后，才分散到凯里、雷山、凯里及剑河等地。据寨内老人告知，这个村寨定居此处有600多年的历史。`,
      //           pic: ["http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%202020211780608%20%2B%20.jpeg",
      //             "http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%202020211786265%20%2B%20.jpeg"]
      //         },
      //         last: [{
      //           id: 2,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //           desc: `
      //                     聚落形态：集聚型带状(或列状)村。
      // 格局：背山面水。
      // 分布：季刀分上下两寨，苗寨沿山而居，依山傍水，古树参天，风景宜人，民族风俗淳朴、动人、浓郁。下寨前临河，后依山，巴拉河由南向北，后转东，绕村脚而过，隔河为凯（里）雷（山）公路。全寨苗族聚居，潘姓，110余户，近500人。村后一片古木风景树，寨前一片水田加河流。巴拉河上游南岸为季刀上寨，下游右岸为季刀下寨，山寨沿山居住，村后依山，古木参天，村寨建筑古朴，吊脚楼木房瓦顶为多，错落整齐，背山面水，块状聚落。有百年粮仓、古花街等，寨前临巴拉河，风景秀丽，隔河为凯雷公路。
      // 主要街巷：从球场到季刀上寨顶部。
      // 庙：过桥后往上寨方向走500米左右就能看到。
      // 粮仓：季刀寨的百年粮仓，始建于清朝道光年间，至今已有二、三百年的历史，位于季刀上寨的中心地带。
      //                 `,
      //           direction: 'right',
      //           pic: 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%2020202117847867%20%2B%20.jpeg'
      //         }, {
      //           id: 3,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/WISDOM.png',
      //           desc: `季刀潘姓传到现在有20多代，相传潘姓的先祖从黄帝蚩尤大战后逃到了长江江西一代，又迁到湖南洞庭湖，又迁到天柱，然后才到凯里。在潘姓迁来之后，住在季刀对面的山腰的黄姓苗人也迁来此地。相传黄姓苗人住的地方地势好，但生出来的男孩很丑，女孩漂亮，有母鸡和公鸡来到现在的地方并并生出小鸡，有人来干活看到认为这边风水好，就搬过来了。`,
      //           direction: 'right',
      //           pic: 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%2020202117947819%20%2B%20.jpeg'
      //         }, {
      //           id: 4,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/STYLE.png',
      //           desc: `村落外围的山体绿化、巴拉河河岸自然生态、村寨视线内的外围田野、村落内绿化、古树是重要的自然景观要素。建筑依山就势，顺应自然，呈阶梯状布置，保护环境，节省投资。
      //           `,
      //           direction: 'left',
      //           pic: 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021175622953%20%2B%20.jpeg'
      //         }]
      //       }
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
.siteSelectionPattern-container {
  width: 100%;
  // height: 100vh;
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

    .fist {
      .fistImgul {
        width: 380px;
        display: inline-block;
        margin: 0 10px;

        img {
          aspect-ratio: 16/9;
        }
      }

      p {
        font-size: 14px;

        font-weight: 400;
        color: #333333;
        line-height: 28px;
        letter-spacing: 2px;
        text-indent: 2em;
        max-height: 476px;
        text-align: left;
        overflow: auto;
        margin-top: 30px;
      }
    }
  }
}
</style>