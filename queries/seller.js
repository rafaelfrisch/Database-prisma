const createManySellers = async (prisma, data) => {
  await prisma.seller.createMany({
    data,
    skipDuplicates: true,
  });
};

module.exports = {
  createManySellers,
};
