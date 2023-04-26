const villageDetailsDb = require('../mock/db/villageDetails.db')
const rusticInfoDb = require('../mock/db/rusticInfo.db')

class villageDetailsController {
  /**
   * 获取菜单路由
   */
  async meun(req, res) {
    return res.send({
      code: 1,
      msg: '获取获取菜单路由成功',
      data: villageDetailsDb.meun
    })
  }
  /**
   * 村咯详细信息
   */
  async info(req, res) {
    try {
      let { id, type } = req.query
      console.log(id, type, 666);
      return res.send({
        code: 1,
        msg: `获取${type}数据成功`,
        data: rusticInfoDb[id][type]
      })
    } catch (error) {
      return res.send({
        code: 0,
        msg: `获取数据失败`,
      })
    }
  }
}


module.exports = new villageDetailsController()