const express = require('express')
const { running, secondBP } = require('../controller/home.controller')
const home = express.Router()
home.get('/getrunning', running)
home.get('/getsecondBP', secondBP)
module.exports = home