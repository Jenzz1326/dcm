<template>
  <div class="layout-container">
    <div class="nav-container">
      <div class="logo imgfull">
        <img src="./../../assets/images/vzLogo.png" alt="" />
      </div>

      <ul class="nav-menus">
        <li
          v-for="(item, index) in meun"
          :key="index"
          @click="$router.push(item.url)"
        >
          {{ item.title }}
        </li>
        <i class="nav-divide"></i>
        <div class="v">
          <div class="village-cod imgfull">
            <img src="./../../assets/images/villagecor.png" alt="" />
          </div>
          <div class="videos imgfull">
            <img src="./../../assets/images/videoLogo.png" alt="" />
          </div>
        </div>
      </ul>
    </div>
    <RouterView></RouterView>
    <!-- ###页脚### -->
    <footer>
      <!-- 上面 -->
      <div class="top">
        <div class="lianxi">
          <p class="fotit">联系我们</p>
          <span>电话/Tel:</span>
          <br />
          <span>0851-85360285 / 13098519070</span>
          <br />
          <span>地址/Address:</span>
          <br />
          <span>西部研发基地三栋6层</span>
        </div>

        <div class="cunluoImg imgfull">
          <img src="../../assets/images/chuantongcunWZ.png" alt="" />
        </div>
        <div class="danwe">
          <p class="fotit">指导单位</p>
          <a href="#">贵州省住房和城乡建设厅</a>
          <p class="fotit">技术支持</p>
          <a href="#">贵州小黑科技有限公司</a>
        </div>
        <div class="ma imgfull">
          <p class="fotit">关注微信</p>
          <img src="../../assets/images/wxscan.png" alt="" />
        </div>
      </div>
      <!-- 下面 -->
      <div class="footbottom">
        Copyright @2017-2023 <span>黔ICP备19005829号</span>
      </div>
    </footer>
  </div>
</template>
<script>
import { RouterView } from "vue-router";

export default {
  components: { RouterView },
  name: "layout",
  props: [],
  data() {
    // 村落合集
    // 建筑风情
    // 古村映像
    // 政策动态
    // 村落活动
    // 建设管理
    // 联系我们
    return {
      meun: [
        {
          title: "首页",
          url: "/home",
        },
        {
          title: "村落合集",
          url: "/collection",
        },
        {
          title: "建筑风情",
        },
        {
          title: "古村映像",
          url:'/vizenVillageGz'
        },
        {
          title: "村落活动",
        },
        {
          title: "建设管理",
        },
        {
          title: "联系我们",
        },
      ],
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
.layout-container {
  .nav-container {
    position: fixed;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 48px;
    background-color: #011a27;
    opacity: 0.8;
    align-items: center;
    z-index: 999;

    .logo {
      padding-left: 28px;
      width: 178px;
      height: 34px;
    }

    .nav-menus {
      display: flex;
      color: white;
      margin-right: 180px;
      font-size: 12px;
      font-weight: 100;
      font-family: "PingFangSC-Regular";

      li {
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background-color: rgb(0, 0, 0, 0.5);
          color: white;
          border-radius: 8px;
        }
        .nav-divide {
          margin-left: 8px;
          display: inline-block;
          width: 1px;
          height: 100%;
          background-color: rgb(96, 96, 96);
        }
      }
    }

    .v {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-left: 24px;

      div {
        width: 38px;
        height: 38px;
      }
    }
  }

  .routerview {
    // padding-top: 58px;
  }

  footer {
    padding: 20px 220px;
    width: 100%;
    // height: 100%;
    background: url("../../assets/images/footerM.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    color: white;

    .top {
      display: flex;
      justify-content: center;

      // 联系
      .lianxi {
        white-space: nowrap;

        .fotit {
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 4.2px;
          margin-bottom: 5px;
          margin-top: 10px;
        }

        span {
          font-size: 13px;
          font-weight: 300;
          color: #ffffff;
          letter-spacing: 3.36px;
          line-height: 22px;
          opacity: 0.7;
        }
      }

      .cunluoImg {
        width: 914px;
        height: 63px;
      }

      .danwe {
        white-space: nowrap;
        margin-right: 50px;

        a {
          text-decoration: none;
          font-size: 10px;
          color: #ffffff;
          letter-spacing: 1.36px;
          text-align: right;
          line-height: 17px;
          opacity: 0.7;
        }
      }

      .ma {
        white-space: nowrap;

        p {
          margin-bottom: 5px;
        }

        text-align: center;
        width: 86px;
      }
    }

    .footbottom {
      width: 100%;
      padding: 10px 213px;
      text-align: center;
      color: #9b9b9b;
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
}
</style>