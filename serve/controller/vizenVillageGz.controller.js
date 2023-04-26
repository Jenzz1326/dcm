const vizenVillageGz = require('./../mock/db/vizenVillageGz.db');
class VizenVillageGzController {

    getmenu(req, res) {
        try {
            return res.send({
                code: 1,
                msg: '获取菜单成功',
                data: vizenVillageGz.meun
            })
        } catch (error) {
            return res.send({
                code: 0,
                msg: '获取菜单失败'
            })
        }
    }

    getresource(req, res) {
        try {
            let { type } = req.query
            let data = []
            if (type == 1) {
                data = [...vizenVillageGz.imgs, ...vizenVillageGz.videos]
            } else if (type == 2) {
                data = vizenVillageGz.imgs
            } else if (type == 3) {
                data = vizenVillageGz.videos
            }
            return res.send({
                code: 1,
                msg: '获取资源成功',
                data
            })
        } catch (error) {
            return res.send({
                code: 0,
                msg: '获取资源失败',
                data
            })
        }
    }
    // getimgs(req, res) {
    //     try {
    //         return res.send({
    //             code: 1,
    //             msg: '获取图片成功',
    //             data: vizenVillageGz.imgs
    //         })
    //     } catch (error) {
    //         return res.send({
    //             code: 0,
    //             msg: '获取图片失败'
    //         })
    //     }
    // }
    // getvideos(req,res) {
    //     try {
    //         return res.send({
    //             code: 1,
    //             msg: '获取视频成功',
    //             data: vizenVillageGz.videos
    //         })
    //     } catch (error) {
    //         return res.send({
    //             code: 0,
    //             msg: '获取视频失败',

    //         })
    //     }
    // }
    // all(req,res) {
    //     try {
    //         return res.send({
    //             code: 1,
    //             msg: '获取全部数据成功',
    //             data: [...vizenVillageGz.imgs,...vizenVillageGz.videos]
    //         })
    //     } catch (error) {
    //         return res.send({
    //             code: 0,
    //             msg: '获取全部数据失败'
    //         })
    //     }
    // }
}

module.exports = new VizenVillageGzController()