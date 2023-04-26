<!-- 自然地理 -->
<template>
  <div class="physicalGeography-container">
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
  name: "physicalGeography",
  props: ["id", "oTdata"],
  data() {
    return {
      //       oTdata: {
      //         fist: {
      //           id: 1,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/NATURE/NATURE_ENV.png',
      //           desc: `1.山川水系：前临巴拉河，背靠耶耿巴山。
      // 2.地质地貌：为深切割的中山、次为低中山和高中山的喀斯特地貌特征。
      // 3.植被动物：
      // 植被:高山灌丛、山地常绿落叶混交林、常绿阔叶；
      // 动物:牛,马,猪,鸡,鱼等。`,
      //           pic: ['http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021171052751%20%2B%20.jpeg', 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021171052751%20%2B%20.jpeg'
      //             , 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021171056505%20%2B%20.jpeg'],
      //         },
      //         last: [{
      //           id: 2,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/BASIC_INFO/VILLAGE_HISTORY.png',
      //           desc: '"1.百年古松树群：位于季刀上寨寨后，鼓藏场南侧。 2.季刀寨门小山：位于季刀寨的中部，两个村寨隔山而建，以风水格局来分析，是季刀寨的“案山”。 3.季刀百年粮仓：位于季刀上寨的中心地带，始建于清朝道光年间，至今已有二、三百年的历史。 4.季刀古井：寨内有2处古井，分散在村寨区域内。 5.季刀百年步道：位于季刀上寨进寨路段，全是老石板铺砌而成，全长约80米。 6.季刀古歌堂：位于季刀上寨中部，是寨子的“活动中心”，表演和庆祝活动都在此处举行。 7.鼓藏场：是村寨埋藏铜鼓的地方，传说铜鼓换木柱时发生了不吉利的事情，于是祖先立下遗嘱，后代不得再跳铜鼓。"',
      //           direction: 'right',
      //           pic: 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021171144328%20%2B%20.jpeg'
      //         }, {
      //           id: 3,
      //           title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/BASIC_INFO/HISTORY_OBJECT.png',
      //           desc: '"1.古步道 有上百年历史，对村落内百年古步道，划定保护范围，保护范围内严禁侵占、开挖。两边的现状绿化树严禁砍伐及破坏。 2.古树 大多有百年左右历史，古树是传统村落的重要有机组成部分，要对古树名木进行严格的保护。对传统村落内50年以上的树木一律禁止砍伐；对村落内的百年古树群要一律挂牌保护，并设文字说明。对古树要专门设立护拦，禁止攀爬和折枝，不允许砍伐。监控病虫害的侵蚀情况。建立管养责任制和监督机制。一旦有虫害，要及时治疗和处理。 3.古井 古井在古时的日常生活中有非常重要的作用，承载着传统村落生产生活的历史记忆。季刀寨传统村落的古井应登记造册，并设立标志牌，严禁填埋、破坏。寨内共有6口古井，，古井周边5米范围内划定为保护范围，规划对古井周边环境进行整治，修复井壁，用石块对井周边用地进行硬化处理，整理出水沟，加强水井周边绿化。"',
      //           direction: 'left',
      //           pic: 'http://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2020/2/%20%2B%20202021171237882%20%2B%20.jpeg'
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
.physicalGeography-container {
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