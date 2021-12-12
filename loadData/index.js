const userData = require('./users')
const sellerData = require('./sellers')
const productData = require('./products')
const customersData = require('./customers')
const splitData = require('./splitData')

module.exports = {
    ...userData,
    ...sellerData,
    ...productData,
    ...splitData,
    ...customersData
}