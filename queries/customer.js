const createManyCustomers = async (prisma, data) => {
  await prisma.customer.createMany({
    data,
    skipDuplicates: true,
  });
};

module.exports = {
  createManyCustomers,
};
