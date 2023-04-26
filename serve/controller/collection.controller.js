const collectionDb = require('../mock/db/collection.db')
class rusticController {
  /**获取乡村菜单
   * 
   */
  getresourceMeun(req, res) {
    try {
      return res.send({
        code: 1,
        msg: '获取乡村菜单成功',
        data: collectionDb.rusticMeun
      })
    } catch (error) {
      return res.send({
        code: 0,
        msg: '获取乡村菜单失败',
      })
    }
  }
  /**获取乡村列表
   * 
   */
  getresource(req, res) {
    try {
      let { f, b } = req.query
      console.log(f, b);
      return res.send({
        code: 1,
        msg: '获取乡村列表成功',
        data: collectionDb.secondBP[f][b]
      })
    } catch (error) {
      return res.send({
        code: 0,
        msg: '获取乡村列表失败',
      })
    }
  }
  /**
   * 获取子菜单
   */
  getchild(req, res) {
    let { id } = req.query
    return res.send({
      code: 1,
      msg: '获取子菜单成功',
      data: collectionDb.child[id]
    })
  }
}
module.exports = new rusticController()

