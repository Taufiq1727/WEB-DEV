const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
    enum: ["friction", "non-friction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "6a2bf1ad8db7e62745e2147b",
  { price: -100 },
  { runValidators: true },
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// let book1 = new Book({
//   title: "Maths 12",
//   author: "RD SHARMA",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
