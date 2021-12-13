const userQueries = require('./user')
const sellerQueries = require('./seller')
const productQueries = require('./products')
const customerQueries = require('./customer')
const orderQueries = require('./orders')

module.exports = {
    ...userQueries,
    ...sellerQueries,
    ...productQueries,
    ...customerQueries,
    ...orderQueries
}
