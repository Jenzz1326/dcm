const express = require('express')
const { meun, info } = require('../controller/villageDetails.controller')
const home = express.Router()
home.get('/meun', meun)
home.get('/rusticinfo', info)
module.exports = home