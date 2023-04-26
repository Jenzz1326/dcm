const express = require('express')
const homeRouter = require('./router/home.router')
const collectionRouter = require("./router/collection.router")
const villageDetailsRouter = require("./router/villageDetails.router")
const vizenVillageGz = require("./router/vizenVillageGz.router")
const path = require('path')
const cors = require("cors") //跨域
const app = express()
app.use(cors())
app.use('/static', express.static(path.join(__dirname, './static')))
app.use('/home', homeRouter)
app.use('/collection', collectionRouter)
app.use('/villageDetails', villageDetailsRouter)
app.use('/vizenVillageGz', vizenVillageGz)
app.listen('5139', () => {
  console.log('服务器启动成功');
})