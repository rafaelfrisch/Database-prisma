const createManyProducts = async (prisma, data) => {
  await prisma.product.createMany({
    data,
    skipDuplicates: true,
  });
};

module.exports = {
  createManyProducts,
};
