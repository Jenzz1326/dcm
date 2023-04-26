<template>
  <div class="villageDetails-container">
    <div class=" titleImg">
      <div class="textcontent">
        <div class="titleImgText">
          <div class="relationVillageName">{{ $route.query.relationVillageName }}</div>
          <div class="slogan">{{ $route.query.slogan }}</div>
        </div>
        <div class="wenzi-list">
          <div class="wenzi-list-bg">
            <span :class="index == state - 1 ? 'active' : ''" @click="chenge(item)" v-for="(item, index) in meun"
              :key="index">
              {{ item.text
              }}</span>
            <!-- <span class="active">村落概况</span>
            <span class="">自然地理</span>
            <span>选址格局</span>
            <span>传统建筑</span>
            <span>历史环境要素</span>
            <span>生产生活</span>
            <span>民俗文化</span>
            <span>村志族谱</span> -->
          </div>
        </div>
        <div class="pano imgfull">
          <div class="pano-bg">
            <div class="pano-content">
              <img src="../../../assets/images/pano.png" alt="">
              <div>看全景</div>
            </div>
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </div>
    <!-- 村落概况 :overviewOfTheVillage
  自然地理:physicalGeography
  选址格局:siteSelectionPattern
  传统建筑:traditionalArchitecture
  历史环境要素:historicalEnvironmentalElements
  生产生活:productionAndLife
  民俗文化:folkloreCulture
  村志族谱 :villageGenealogy -->
    <component v-if="meun[state - 1].view" :is="meun[state - 1].view" :id="id" :oTdata="oTdata || { fist: {}, last: [] }"></component>
    <!-- <VillageGenealogy></VillageGenealogy> -->
  </div>
</template>
<script>
import OverviewOfTheVillage from '@/components/villageDetails/view/overviewOfTheVillage.vue'
import PhysicalGeography from '@/components/villageDetails/view/physicalGeography.vue'
import SiteSelectionPattern from '@/components/villageDetails/view/siteSelectionPattern.vue'
import TraditionalArchitecture from '@/components/villageDetails/view/traditionalArchitecture.vue'
import HistoricalEnvironmentalElements from '@/components/villageDetails/view/historicalEnvironmentalElements.vue'
import ProductionAndLife from '@/components/villageDetails/view/productionAndLife.vue'
import FolkloreCulture from '@/components/villageDetails/view/folkloreCulture.vue'
import VillageGenealogy from '@/components/villageDetails/view/villageGenealogy.vue'
import AncientTreesAndFamousTrees from '@/components/villageDetails/view/ancientTreesAndFamousTrees.vue'



import villageDetails from '@/api/villageDetails.js'

export default {
  components: {
    OverviewOfTheVillage,
    PhysicalGeography,
    SiteSelectionPattern,
    TraditionalArchitecture,
    HistoricalEnvironmentalElements,
    ProductionAndLife,
    FolkloreCulture,
    VillageGenealogy,
    AncientTreesAndFamousTrees
  },
  name: "villageDetail",
  props: ['id'], //乡村id
  data() {
    return {
      state: 1,
      type: "OverviewOfTheVillage",
      meun: [],
      oTdata: {}
    };
  },
  methods: {
    /**
     * 更新菜单时候
     */
    chenge(item) {
      this.state = item.id
      this.type = item.view
      this.getrusticinfo()
    },
    /**
     * 获取菜单
     */
    async getmenu() {
      try {
        this.meun = await villageDetails.getmenuApi()
      } catch (error) {

      }
    },
    /**
     * 获取当前春装数据
     */
    async getrusticinfo() {
      try {
        this.oTdata = await villageDetails.getrusticinfoApi(this.id, this.type)

      } catch (error) {

      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getmenu()
    this.getrusticinfo()
  },
  mounted() { },
};
</script>
<style lang='less' scpoed>
.villageDetails-container {
  .titleImg {
    width: 100%;
    height: 471px;
    position: relative;
    background: url('../../../assets/images/2023119111539478 + 204435890.png') no-repeat center center;
    background-size: 100%;
    text-align: center;

    .textcontent {
      padding-top: 130px;
      color: white;

      .pano {
        position: absolute;
        right: 0;
        width: 91px;
      }

      .wenzi-list {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        white-space: nowrap;

        span {
          font-size: 20px;
          padding: 3px 20px;
        }
      }

      .relationVillageName {
        font-size: 30px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 42px;
        letter-spacing: 6px;
        margin-bottom: 16px;
      }

      .slogan {
        font-size: 16px;
      }
    }
  }
}



// width: 100%;
// height: 100vh;
// // height: 100%;
// background: url('../../../assets/images/sixthBP.jpg') no-repeat;
// background-size: 100% 100%;
// display: flex;
// flex-direction: column;
// align-items: center;
</style>