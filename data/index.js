// const json = require('./orders.json')
const fs = require('fs')
const fixJson = require('./fixJson')

const newData = fixJson(json)
// fs.writeFileSync('./data/orders.json', JSON.stringify(newData))
