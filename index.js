const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const queries = require('./queries')

async function main() {
	const data = {
		name: "Alice",
		email: "alice2@prisma.io",
		posts: {
			create: { title: "Hello World" },
		},
		profile: {
			create: { bio: "I like turtles" },
		},
	}
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
