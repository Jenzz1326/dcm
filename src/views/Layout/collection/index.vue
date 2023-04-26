<template>
  <div class="collection-container">
    <!-- ###头图#### -->
    <div class="titleImg imgfull">
      <!--背景-->
      <img src="../../../assets/images/toutu.jpg" alt="" />
      <!--文字图-->
      <img class="textimg" src="../../../assets/images/toutitle.png" alt="" />
    </div>
    <!--####搜索图列表###-->
    <div class="search">
      <div class="w">
        <div class="top">
          <!-- 位子 -->
          <div class="weizimenu">
            <!-- <span class="avtive">全部</span> -->
            <span
              v-for="item in resourceMeun"
              @click="getchild(item.id)"
              :key="item.id"
              :class="item.id == fMeunstate ? 'avtive' : ''"
              >{{ item.diqu }}
              <div class="child" @click.stop>
                <span
                  v-for="child in childs"
                  :key="child.id"
                  :class="child.id == resourceMeunstate ? 'avtive' : ''"
                  @click.stop="getresource(child.id)"
                  >{{ child.name }}</span
                >
              </div>
            </span>
          </div>
          <!-- 搜索框 -->
          <div class="searchinput">
            <input type="text" class="searchInput" />
            <div class="searchBtn imgfull">
              <img src="../../../assets/images/searchicon.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 每一个项目 -->
        <Weizi :secondBPdata="resource"></Weizi>
      </div>
    </div>
  </div>
</template>
<script>
import Weizi from "@/components/home/Weizi.vue";
import CollectionApi from "@/api/collection";
export default {
  components: { Weizi },
  name: "collection",
  props: [],
  data() {
    return {
      resourceMeunstate: 1001, //子级菜单选中状态
      fMeunstate: 1, //父级菜单选中状态
      resourceMeun: [],
      f_id: 1,
      childs: [],
      resource: [],
      // childstate: false,
    };
  },
  methods: {
    async getresourceMeun() {
      try {
        this.resourceMeun = await CollectionApi.getresourceMeunApi();
      } catch (error) {}
    },
    async getresource(b) {
      this.resourceMeunstate = b;
      // this.getresource(1001);
      try {
        this.resource = await CollectionApi.getresourceApi({
          f: this.f_id,
          b,
        });
        // this.childstate = false;
      } catch (error) {}
    },
    // 获取子菜单数据
    async getchild(id) {
      this.fMeunstate = id;
      this.f_id = id;
      this.childs = await CollectionApi.getchildApi(id);
      // this.childstate = true;
    },
  },
  computed: {},
  watch: {},
  created() {
    // 获取菜单
    this.getresourceMeun();
    //获取默认菜单数据
    this.getresource(1001);
    this.getchild(1);
  },
  mounted() {},
};
</script>
<style lang='less' scpoed>
.collection-container {
  .titleImg {
    position: relative;

    .textimg {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      z-index: 2;
      width: 127px;
    }
  }

  .search {
    width: 100%;
    height: 100vh;
    // height: 100%;
    background: url("../../../assets/images/bg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      display: flex;
      justify-content: space-between;
      padding: 67px 0;
      position: relative;
      margin-bottom: 120px;
      .weizimenu {
        span {
          letter-spacing: 3.2px;
          margin: 16px;
          padding: 4px 16px;
          min-width: 35px;
          color: black;
          .child {
            padding: 30px;
            position: absolute;
            right: 0;
            left: 0;
            top: 120px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 18px;
            min-height: 78px;
          }
        }
      }

      .searchinput {
        position: relative;
        width: 120px;
        height: 28px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 17px;
        background-color: #436a8f;

        .searchBtn {
          width: 14px;
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
        }

        .searchInput {
          outline: none;
          width: 120px;
          border-radius: 17px;
          height: 28px;
          float: left;
          border: 0;
          line-height: 30px;
          color: #fff;
          text-align: left;
          font-family: PingFangSC-Thin, Arial, sans-serif;
          background: rgba(0, 0, 0, 0);
          text-indent: 10px;
          letter-spacing: 1px;
          padding-right: 32px;
        }
      }
    }
  }
}
</style>