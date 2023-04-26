let collectionDb = {
  //乡村菜单
  rusticMeun: [{
    id: 1,
    diqu: "中路",
    // child: [],
  }, {
    id: 2,
    diqu: "聂呷",
    // child: [{ id: 2001, name: "绵阳" }, { id: 2002, name: '巴中' }],
  },{
    id: 3,
    diqu: "梭坡",
    // child: [{ id: 2001, name: "绵阳" }, { id: 2002, name: '巴中' }],
  }
  ],
  // 子菜单
  child: {
    1: [{ id: 1001, name: "中路概况" }, { id: 1002, name: '村落' }],
    2: [{ id: 2001, name: "聂呷概况" }, { id: 2002, name: '村落' }],
    3: [{ id: 3001, name: "梭坡概况" }, { id: 3002, name: '村落' }],
  },
  secondBP: {
    //父级别 - 省份 - 贵州
    1: {
      //兄弟节点 -  贵州的怀柔
      1001: [{
        id: 1001001, //村咯id
        scenicSpotimg: 'static/collection/中路概况.png',
        p: '中路概况',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
      // {
      //   id: 1001002,
      //   scenicSpotimg: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2023/3/202331711374512%20%2B%201061351175.jpg',
      //   p: '佘家营村营上组',
      //   span1: '四川 丹巴县',
      //   ewm: 'https://longans.top/home'
      // }
    ],
    
      //兄弟节点  -贵州的贵阳
      1002: [{
        id: 1002001, //村咯id
        scenicSpotimg: 'static/collection/罕额依村.png',
        p: '罕额依村',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
      {
        id: 1002002,
        scenicSpotimg: 'static/collection/基卡依村.png',
        p: '基卡依村',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
      {
        id: 1002003,
        scenicSpotimg: 'static/collection/呷仁依村.png',
        p: '呷仁依村',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
      {
        id: 1002004,
        scenicSpotimg: 'static/collection/克格依村.png',
        p: '克格依村',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
      {
        id: 1002005,
        scenicSpotimg: 'static/collection/波色龙村.png',
        p: '波色龙村',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      },
    ]
    },
    //父级别 - 省份 - 贵州
    2: {
      //兄弟节点 -  贵州的怀柔
      2001: [{
        id: 2001001, //村咯id
        scenicSpotimg: 'static/collection/聂呷概况.png',
        p: '聂呷概况',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      }
    ],
      //兄弟节点  -贵州的贵阳
      2002: [{
        id: 2002001, //村咯id
        scenicSpotimg: 'static/collection/甲居.png',
        p: '甲居',
        span1: '四川 丹巴县',
        ewm: 'https://longans.top/home'
      }
      // {
      //   id: 2002002,
      //   scenicSpotimg: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2023/3/202331711374512%20%2B%201061351175.jpg',
      //   p: '佘家营村营上组',
      //   span1: '四川 丹巴县',
      //   ewm: 'https://longans.top/home'
      // },
      // {
      //   id: 2002003,
      //   scenicSpotimg: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2023/3/202331711374512%20%2B%201061351175.jpg',
      //   p: '佘家营村营上组',
      //   span1: '四川 丹巴县',
      //   ewm: 'https://longans.top/home'
      // },
      // {
      //   id: 2002004,
      //   scenicSpotimg: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2023/3/202331711374512%20%2B%201061351175.jpg',
      //   p: '佘家营村营上组',
      //   span1: '四川 丹巴县',
      //   ewm: 'https://longans.top/home'
      // },
      // {
      //   id: 2002005,
      //   scenicSpotimg: 'https://resource-1258796684.cos.ap-shanghai.myqcloud.com/station/2023/3/202331711374512%20%2B%201061351175.jpg',
      //   p: '佘家营村营上组',
      //   span1: '四川 丹巴县',
      //   ewm: 'https://longans.top/home'
      // }
    ]
    },
  }
}

module.exports = collectionDb