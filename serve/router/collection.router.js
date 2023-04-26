const express = require('express')
const { getresourceMeun, getresource, getchild } = require('../controller/collection.controller')
const collection = express.Router()
collection.get('/getresourceMeun', getresourceMeun)
collection.get('/getresource', getresource)
collection.get('/getchild', getchild)
module.exports = collection