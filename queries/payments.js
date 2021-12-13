const createManyOrderPayments = async (prisma, data) => {
  await prisma.order_payment.createMany({
    data,
    skipDuplicates: true,
  });
};

module.exports = {
  createManyOrderPayments,
};
