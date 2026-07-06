const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/random", (req, res) => {
  res.send("Random route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
