const orderItemsJson = require("../data/order_items.json");

const orderItemsData = () => {
  const fieldsToAjust = ["shipping_limit_date"];
  const adjustDate = orderItemsJson.map((orderItem) => {
    fieldsToAjust.forEach((attribute) => {
      orderItem[attribute] = new Date(orderItem[attribute]);
    });

    return orderItem;
  });

  return adjustDate;
};

module.exports = {
  orderItemsData,
};
