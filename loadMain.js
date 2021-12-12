const queries = require('./queries')
const loadData = require('./loadData')

const loadMain = async (prisma) => {
    const data = loadData.multipleUsersData()
    await queries.createManyUsers(prisma, data)
    
    const allUsers = await queries.getAllUsers(prisma)
    console.dir(allUsers, { depth: null });
}

module.exports = loadMain
