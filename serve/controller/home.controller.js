const homeDb = require('../mock/db/home.db')
class homeController {
  /**
   * 获取巡行地图数据
   */
  running(req, res) {
    return res.send({
      code: 1,
      msg: '获取巡行地图数据成功',
      data: homeDb.running
    })
  }
  /**
   * 获取精选乡村数据
   */
  secondBP(req, res) {
    return res.send({
      code: 1,
      msg: '获取精选乡村数据成功',
      data: homeDb.secondBP
    })
  }
}


module.exports = new homeController()