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

const splitData = (dataArray) => {
  const maxSize = 5000
  const multipleDataArray = []
  for(let i=0; i<dataArray.length; i+=maxSize){
    multipleDataArray.push(dataArray.slice(i, i+maxSize))
  }
  return multipleDataArray
}

module.exports = {
  productsData,
  splitData
};
