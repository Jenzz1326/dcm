<!-- 历史环境要素 -->
<template>
  <div class="historicalEnvironmentalElements-container">
    <div class="w2">
      <div class="last">
        <!-- 每一项 -->
        <div class="itemss" v-for="(item) in oTdata.last" :key="item.id">

          <div class="title imgfull">
            <div class="titletext">
              {{ item.titletext }}
            </div>
          </div>
          <LeftorRightImg2 :tag="item.tag" :direction="item.direction" :desc="item.desc" :pic="item.pic">
          </LeftorRightImg2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftorRightImg2 from '@/components/villageDetails/components/LeftorRightImg2.vue'
export default {
  components: { LeftorRightImg2 },
  name: "historicalEnvironmentalElements",
  props: ['id', 'oTdata'],
  data() {
    return {
      // oTdata: {
      //   last: [{
      //     id: 1,
      //     titletext: '古歌堂',
      //     // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //     desc: `古歌堂是村寨里的人逢年过节的时候，他们将桌子摆到场地中间，并且摆酒，之后人们便在那里对唱，以前场地是土的，04年的时候被改建成用鹅卵石铺在地上。古歌堂的场地上有五个圆状的图形，村里有四个大的房族(四个房族潘姓有三个，姓氏的来源据说是因为苗族以前没有姓，为了躲避追杀，才叫潘姓，另一种说法是皇帝赐姓，之后“你撒”公（第一个祖公的名字）下是独子。独子下有四个儿子，后来有一个公做挑夫，就在永乐成了家，剩了三个公（分别叫“嘎不克”、“嘎歹李”、“安乞尔”）在这里。所以成了三个潘姓的房族。另一个房族是黄姓，关于黄姓的迁入有两种说法，一种是姓黄的孩子是他妈妈与高坡的黄家生的，但还在他妈妈肚子里的时候他爸就去世了，之后是季刀的潘姓收留了他。黄姓的家人认为孩子是黄家的，两姓商量以后，决定男孩姓黄，女孩姓潘，后生的是男孩，便有了黄姓。另一种说法是姓黄的人来到季刀，由于很贫穷，季刀的一个公就给他土地等，并认作兄弟，让他在这里居住下来，之后便有了黄姓的房族。外面的四个圆形代表四个房族，中间的圆就是整个寨子的人，寓意四个房族围绕这个大家庭，圆圆满满`,
      //     tag: ['类型：塔桥亭阁', '年代：民国时期'],
      //     direction: 'right',
      //     pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015144025469%20%2B%201937180574.JPG'
      //   }, {
      //     id: 2,
      //     titletext: '百年步道',
      //     // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //     desc: `百年步道主要是用石板铺砌而成，由一条主道（从球场到季刀上寨顶部）和其余几条次步道组成。关于步道的形成，村里人告诉我们，以前的路是土路，遇到雨雪天气的时候就会很脏，村里的人爱干净，就寻找一些办法去把路弄好。村里的老人家到河里去洗脚的时候，发现巴拉河附近的石头比较好，就会把石头捡回来，并把它们嵌在土路上，久而久之，石头路就被铺好了。其经历的时间较长，保存较良好，现在还在使用。`,
      //     tag: ['类型：其他', '年代：清代'],
      //     direction: 'right',
      //     pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/2022101514443457%20%2B%20919201356.JPG'
      //   }, {
      //     id: 3,
      //     titletext: '古井',
      //     // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //     desc: `古井最开始是自然冒水，之后人们为了能更好的储存水、避免灰尘或树叶这些落到水里，把水弄脏。村里人用石头把周围砌成一堵较小的墙，并弄了一个顶。村里古井的水从不断水，有几百年的历史。到苗年的时候，村里人会进行祭祀活动，，大年初一是卯日，在卯日当天十二点以后，就不能像倒水，三天之后，人们要早早的去挑水，尽量不要遇到人，遇到人的话也不能说什么。到达水井之后，就需要烧香烧纸，然后才把水挑回家。`,
      //     tag: ['类型：井泉沟渠 ', '年代：清代'],
      //     direction: 'right',
      //     pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015143934959%20%2B%20606534321.JPG'
      //   }]
      // }
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
};
</script>
<style lang='less' scpoed>
.historicalEnvironmentalElements-container {
  width: 100%;
  // height: 100vh;
  height: 100%;
  background: url('../../../assets/images/bg-top.png') no-repeat;
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
  }
}
</style>