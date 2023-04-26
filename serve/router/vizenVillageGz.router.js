const express = require('express')
const { getmenu, getresource } = require('../controller/vizenVillageGz.controller')
const home = express.Router()
home.get('/getmenu', getmenu)
home.get('/getresource', getresource)
module.exports = home