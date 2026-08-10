const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new mongoose.Schema({
  item: String,
  price:Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],  
    }
);

const Customer = mongoose.model("Customer", customerSchema);


const Order = mongoose.model("Order", orderSchema);

const addCustomers = async () => {
  let customer1 = new Customer({
    name: "Alice Smith",
  });

  let order1 = await Order.findOne({ item: "Laptop" });
  let order2 = await Order.findOne({ item: "Phone" });

  customer1.orders.push(order1);
  customer1.orders.push(order2);

  let result = await customer1.save();
  console.log(result); 
};
// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item: "Laptop", price: 1000 },
//         { item: "Phone", price: 500 },
//         { item: "Tablet", price: 300 },
//     ]);
//     console.log(res);   
// }

// addOrders();

addCustomers();