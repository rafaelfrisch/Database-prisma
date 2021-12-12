const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const queries = require('./queries')
const loadData = require('./loadData')

async function main() {
	const data = loadData.userData()
	await queries.createUser(prisma, data)

  const allUsers = await queries.getAllUsers(prisma)
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
