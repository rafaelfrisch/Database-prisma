const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const loadMain = require('./loadMain')

async function main() {
  loadMain(prisma)
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
