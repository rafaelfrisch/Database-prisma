const userData = require('./users')
const sellerData = require('./sellers')

module.exports = {
    ...userData,
    ...sellerData
}