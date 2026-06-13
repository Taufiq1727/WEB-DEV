const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => console.log("Connected to MongoDB"))

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/watsapp");
}

let chat1 = new Chat({
  from: "Alice",
  to: "Bob",
  message: "Hello Bob! How are you?",
  created_at: new Date(),
});

chat1.save().then((res)=>{
    console.log(res);
})
app.get("/", (req, res) => {
  res.send("Root is working");
});
app.listen(3006, () => {
  console.log("Server is running on port 3006");
});
