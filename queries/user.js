const createUser = async (prisma, data) => {
  await prisma.user.create({
    data,
  });
};

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
	getAllUsers
}