const makeQuery = require('./makeQuery')

const loadMain = async (prisma) => {
    await makeQuery(prisma)
}

module.exports = loadMain
