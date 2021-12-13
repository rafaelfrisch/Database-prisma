const createManyOrderItems = async (prisma, data) => {
  try {
    await prisma.order_item.createMany({
      data,
      skipDuplicates: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createManyOrderItems,
};
