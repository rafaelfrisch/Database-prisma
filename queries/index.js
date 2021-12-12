const userQueries = require('./user')
const sellerQueries = require('./seller')
const productQueries = require('./products')

module.exports = {
    ...userQueries,
    ...sellerQueries,
    ...productQueries
}
