const express = require("express");
const app = express();
const port = 3002;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

const posts = [
  {
    username: "Taufiq",
    content: "I love coding",
  },
  {
    username: "Simran",
    content: "I also love coding",
  },
  {
    username: "Coder",
    content: "I love HTML",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts})
});

app.listen(port, () => {
  console.log("listining in 3002");
});
