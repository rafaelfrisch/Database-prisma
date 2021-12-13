const userData = require('./users')
const sellerData = require('./sellers')
const productData = require('./products')
const customersData = require('./customers')
const ordersData = require('./orders')
const orderItemsData = require('./orderItems')
const orderPaymentsData = require('./payments')
const splitData = require('./splitData')

module.exports = {
    ...userData,
    ...sellerData,
    ...productData,
    ...splitData,
    ...customersData,
    ...ordersData,
    ...orderItemsData,
    ...orderPaymentsData
}