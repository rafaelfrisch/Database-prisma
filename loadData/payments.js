const paymentsJson = require("../data/payments.json");

const paymentsData = () => {
  return paymentsJson;
};

module.exports = {
  paymentsData,
};
