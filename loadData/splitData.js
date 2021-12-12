const splitData = (dataArray) => {
  const maxSize = 5000;
  const multipleDataArray = [];
  for (let i = 0; i < dataArray.length; i += maxSize) {
    multipleDataArray.push(dataArray.slice(i, i + maxSize));
  }
  return multipleDataArray;
};

module.exports = {
  splitData,
};
