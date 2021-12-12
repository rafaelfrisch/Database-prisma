const createUser = async (prisma, data) => {
  await prisma.user.create({
    data,
  });
};

const createManyUsers = async (prisma, data) => {
	console.log(data)
	await prisma.user.createMany({
    data,
		skipDuplicates: true,
  });
}

const getAllUsers = async (prisma) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
	return allUsers
};

module.exports = {
	createUser,
	createManyUsers,
	getAllUsers
}