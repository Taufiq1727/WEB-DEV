const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "John Doe",
    addresses: [
      { location: "123 Main St", city: "New York" },
      { location: "456 Elm St", city: "Los Angeles" },
    ],
  });

  let result = await user1.save();
  console.log(result);
};

addUsers();
