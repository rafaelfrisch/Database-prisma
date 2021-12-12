const userQueries = require('./user')
const sellerQueries = require('./seller')

module.exports = {
    ...userQueries,
    ...sellerQueries
}
