<!-- 民俗文化 -->
<template>
  <div class="folkloreCulture-container">
    <div class="w2">
      <div class="fist">
        <div class="title imgfull">
          <div class="titletext">{{ oTdata.fist.titletext }}</div>
        </div>
        <LeftorRightImg2
          :tag="oTdata.fist.tag"
          :direction="oTdata.fist.direction"
          :desc="oTdata.fist.desc"
          :pic="oTdata.fist.pic"
        ></LeftorRightImg2>
      </div>
      <div class="last">
        <!-- 每一项 -->
        <div class="itemss" v-for="(item, index) in oTdata.last" :key="index">
          <div class="title imgfull">
            <div class="titletext">{{ item.titletext || "" }}</div>
          </div>
          <LeftorRightImg :direction="item.direction" :desc="item.desc" :pic="item.pic"></LeftorRightImg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftorRightImg2 from "@/components/villageDetails/components/LeftorRightImg2.vue";
import LeftorRightImg from "@/components/villageDetails/components/LeftorRightImg.vue";
export default {
  components: { LeftorRightImg2, LeftorRightImg },
  name: "folkloreCulture",
  props: ["id", "oTdata"],
  data() {
    return {
      //       oTdata: {
      //         fist: {
      //           id: 1,
      //           titletext: '非遗项目',
      //           desc: `作为中国非物质文化遗产的苗绣，正面临失传的境地。季刀的双针绕线锈是苗族最古老的绣法之一，现在仅有几位老人会缝制。古来的苗绣急需寻找接班人，并将手工艺转化为可流通商品发扬光大。`,
      //           tag: ['苗绣'],
      //           direction: 'left',
      //           pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015151049441%20%2B%201642018508.JPG'
      //         },
      //         last: [{
      //           id: 2,
      //           titletext: '节庆活动',
      //           // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //           desc: `吃新节：每年农历七月，季刀寨的苗族人民都欢度一年一次吃新节，且以各种活动热烈庆祝，昼歌夜舞，人山人海，重视程度不亚于过苗年。
      // 苗年：苗族地区过苗年的时间并不相同，从农历九月至正月不等。季刀寨苗年是每年农历十月，一般历时三、五天或十五天。年前，各家各户都要备丰盛的年食，除杀猪、宰羊（牛）外，还要备足糯米酒。年饭丰盛，讲究“七色皆备”、“五味俱全”，并用最好的糯米打“年粑”，互相宴请馈赠。2008年6月7日，“苗年”被列入第二批国家级非物质文化遗产保护名录。
      // 扫寨节：每年农历十一月，季刀要过扫寨节，杀牛扫全寨，以驱邪逐火，这样寨子才不失火，保全寨平安。`,
      //           direction: 'right',
      //           pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015144025469%20%2B%201937180574.JPG'
      //         }, {
      //           id: 3,
      //           titletext: '祭祀礼节',
      //           // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //           desc: `活动名称：扫寨节 祭祀对象：火、火灾鬼 祭祀种类：牛、纸钱、酒 祭祀场所：全寨 活动内容：扫除火星，远离火灾`,
      //           direction: 'right',
      //           pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015151221198%20%2B%20964609918.JPG'
      //         }, {
      //           id: 4,
      //           titletext: '婚丧取家',
      //           // title: 'http://webapp.xiaoheitech.cn/vizen-village-gz/images/villageDetails/LOCATION/PATTERN.png',
      //           desc: `婚嫁： 过程：无论是通过媒人介绍的方式还是游方认识的方式，男女青年结婚时一般要经过这样几个重要程序:提亲:父母请媒人到女方家提亲。苗族的媒人一般是丈夫健在、有子女且善言的中年妇女。若两家距离遥远，则请有相同条件的男子担任。 内容：媒人进屋后常常开口说是“来找酒喝”的，女方家就明白来意了。 订亲:提亲后，如果女方家父母同意这门亲事，双方就会举行订亲仪式。订亲的仪式也很复杂，其中重要的一个环节是“神判”，即采取鸡卦的形式判断这门婚事是否对双方吉利。杀鸡煮熟后，拿鸡眼给在场人看，若鸡的眼全睁或全闭，则婚事成，若鸡眼左闭右睁，则预示女克男，若右闭左睁，则男克女，皆为不吉利，即可解除婚约。 参加人员:苗族接亲时常常是男家请几个青年男女作接亲客，女方则请几个送亲姑娘和亲属兄弟陪同盛装新娘出门。新娘到家后，男方全家老小须到屋外回避，让一位贤淑的妇女作为迎亲婆，同时取用一把火、一罐井水放在门槛上，扶新娘跨过火烟进门。新娘跨过火烟时，把随身携带的鸡蛋丢在地上。进屋后男方即把准备好的熟鲤鱼、糯饭和两碗酒端上来，新郎拿出鱼背、糯饭和酒洒在地上，表示祭祖。祭毕，便燃放鞭炮。这一天，客人尽兴喝酒、唱歌，直到天黑。新娘在新郎家住上一至七日而不同居，此后就返回娘家。男方给送亲的每人一只鸡、一包糯饭和几块钱作草鞋钱，迎亲即告结束。 丧葬： 过程：人死后都要进行埋葬。 内容：一般按死者的年龄和死因采用不同的葬法。老年人死亡及中青年人正常死亡,要用杉木制成的棺材土葬,其仪式隆重;如果是夭折、自杀或被打死的,不管老少,用杉木制成简易木匣埋葬在距离村寨较远的僻静地方。 参加人员：长者辞世，讳称“老去了”;孩子夭折讳称“丢去了”;为老人预备的棺材,尊称为“老房子”;忌讳狗场天、鸡场天、羊场天埋人;未嫁的姑娘不参与送葬。`,
      //           direction: 'right',
      //           pic: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2022/10/20221015151410954%20%2B%2085074123.JPG'
      //         }]
      //       }
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
};
</script>
<style lang='less' scpoed>
.folkloreCulture-container {
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
    }

    .last {
    }
  }
}
</style>