const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
main()
  .then(() => console.log("Connected to MongoDB"))

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/watsapp");
}

// let chat1 = new Chat({
//   from: "Alice",
//   to: "Bob",
//   message: "Hello Bob! How are you?",
//   created_at: new Date(),
// });

// chat1.save().then((res)=>{
//     console.log(res);
// })
app.get("/", (req, res) => {
  res.send("Root is working");
});
//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from : from,
    to : to,
    message : message,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat saved successfully");
    })
    .catch((err) => {
      console.log("Error saving chat:", err);

    });
    res.redirect("/chats");
});


app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//Udate Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let {message : newMsg} = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators :true , new: true });
  res.redirect("/chats");
});

// destroy route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});



app.listen(3006, () => {
  console.log("Server is running on port 3006");
});
