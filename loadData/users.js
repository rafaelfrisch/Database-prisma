const userData = () => {
  const data = {
    name: "Alice",
    email: "alice3@prisma.io",
    posts: {
      create: { title: "Hello World" },
    },
    profile: {
      create: { bio: "I like turtles" },
    },
  };
  return data;
};

const multipleUsersData = () => {
  const data = [
    {
      name: "Rafael",
      email: "rafael@prisma.io",
    },
    {
      name: "Francisco",
      email: "francisco@prisma.io",
    },
  ];
  return data;
};

module.exports = {
  userData,
  multipleUsersData
};
