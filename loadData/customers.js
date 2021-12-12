const customersJson = require("../data/customers.json");

const customersData = () => {
  const customersWithoutZipCode = customersJson.map((seller) => {
    const { customer_zip_code_prefix, ...customersData } = seller;
    return customersData;
  });
  return customersWithoutZipCode;
};

module.exports = {
  customersData
};
