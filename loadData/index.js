const userData = require('./users')
const sellerData = require('./sellers')
const productData = require('./products')

module.exports = {
    ...userData,
    ...sellerData,
    ...productData
}