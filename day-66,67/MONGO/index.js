// getting-started.js
const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

User.deleteOne({ name: "Sneha" }).then((result) => {
  console.log(result);
});

// User.findById("6a2a88cf216a3ab416607748")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Taufiq" }, { age: 22 },{new:true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// User.insertMany([
//   { name: "Gopal", email: "gopal@gmail.com", age: 50 },
//   { name: "Priya", email: "priya@gmail.com", age: 28 },
//   { name: "Rahul", email: "rahul@gmail.com", age: 35 },
//   { name: "Sneha", email: "sneha@gmail.com", age: 42 },
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({
//   name: "Simran",
//   email: "simran27@gmail.com",
//   age: 19,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
