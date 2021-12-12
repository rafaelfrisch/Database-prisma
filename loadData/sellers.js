const sellersJson = require("../data/sellers.json");

const sellersData = () => {
  const sellersWithoutZipCode = sellersJson.map((seller) => {
    const { seller_zip_code_prefix, ...sellersData } = seller;
    return sellersData;
  });
  return sellersWithoutZipCode;
};

module.exports = {
  sellersData,
};
