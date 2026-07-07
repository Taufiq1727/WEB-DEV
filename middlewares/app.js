const express = require("express");
const app = express();

//app.use((req, res, next) => {
//   console.log("Middleware executed");
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/random", (req, res) => {
  res.send("Random route");
});

// -----logger middleware-----
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toDateString();
  console.log(req.method, req.path, req.time);
  next();
});
// 404 page
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
