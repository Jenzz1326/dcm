<template>
  <div class="GZitem-container">
     <!-- 模态框 -->
     <div class="modalBox" v-if="Isshowmodal" @click.stop="Isshowmodal=false">
      <div class="modalBoxcontainer" >
          <video :src="this.url" controls width="100%" height="100%" autoplay></video>
      </div>
    </div>
    <!-- 模态框结束 -->
    <img class="main" :src="item.img" alt="">
    <img class="play" @click="chenge(item.url)" v-if="item.url" src="./../../assets/images/play.b7039926.png"   alt="">
  </div>
</template>
<script>
export default {
  components: {},
  name: "GZitem",
  props: ["item"],
  data() {
    return {
      Isshowmodal:false,
      url:'',
    };
  },
  methods: {
    chenge(url){
      if(!url) return
      this.Isshowmodal = true;
      this.url = url;
    }
  },
  computed: {
    
  },
  watch: {},
  created() {},
  mounted() {},
};
</script>
<style lang='less' scpoed>
.GZitem-container{
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  .modalBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
    .modalBoxcontainer{
            width: 60vw;
            height: 60vh;
            // background-color: white;
            // padding: 32px;
            border-radius: 23px;
    }
  }
  .play{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px!important;
    height: 50px!important;
    transform: translate(-50%, -50%);
  }
  
  .main {
    width: 100%;
    margin-bottom: 20px;
    border-radius: 12px;
    transition: all .4s;
  }
  .main:hover{
    transform:scale(1.1);
  }

}
</style>