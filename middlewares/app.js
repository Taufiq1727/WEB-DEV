const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//app.use((req, res, next) => {
//   console.log("Middleware executed");
//   next();
// });

// app.use("/random", (req, res, next) => {
//   console.log("Middleware executed");
//   next();
// });
const checkToken = (req, res, next) => {
  const token = req.query.token;
  if (token === "12345") {
    return next();  
  }
  throw new ExpressError("You need a token", 401);
};
app.get("/api", checkToken, (req, res) => {
  res.send("You have access to the API");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/random", (req, res) => {
  res.send("Random route");
});

// -----logger middleware-----
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toDateString();
//   console.log(req.method, req.path, req.time);
//   next();
// });
// 404 page
// app.use((req, res, next) => {
//   res.status(404).send("Route not found");
// });

app.get("/error", (req, res) => {
  abcd=abcdcd;
});
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
