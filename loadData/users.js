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
  return data
};
module.exports = {
    userData
}