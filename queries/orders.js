const createManyOrders = async (prisma, data) => {
  try {
    await prisma.order.createMany({
      data,
      skipDuplicates: true,
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  createManyOrders,
};
