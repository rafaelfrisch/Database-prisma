const userQueries = require('./user')
const sellerQueries = require('./seller')
const productQueries = require('./products')
const customerQueries = require('./customer')
const orderQueries = require('./orders')
const orderItemsQueries = require('./orderItem')
const orderPaymentsQueries = require('./payments')

module.exports = {
    ...userQueries,
    ...sellerQueries,
    ...productQueries,
    ...customerQueries,
    ...orderQueries,
    ...orderItemsQueries,
    ...orderPaymentsQueries
}
