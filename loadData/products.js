const productsJson = require("../data/products.json");

const productsData = () => {
  const changedProductAtribute = productsJson.map((products) => {
    const { 
      product_description_lenght, 
      product_name_lenght, 
      ...productsData 
    } = products;

    const newProductsData = { 
      ...productsData,
      product_description_length: product_description_lenght,
      product_name_length: product_name_lenght
    }

    return newProductsData;
  });
  return changedProductAtribute;
};

module.exports = {
  productsData,
};
