const ordersJson = require("../data/orders.json");

const ordersData = () => {
  const fieldsToAjust = [
    "order_purchase_timestamp",
    "order_approved_at",
    "order_delivered_carrier_date",
    "order_delivered_customer_date",
    "order_estimated_delivery_date",
  ];
  const adjustDate = ordersJson.map((order) => {
    fieldsToAjust.forEach((attribute) => {
        order[attribute] = new Date(order[attribute])
    })

    return order;
  });
  
  return adjustDate;
};

module.exports = {
  ordersData,
};
