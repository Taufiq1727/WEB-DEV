const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`app is listining on ${port}`);
});

// app.use((req, res) => {
//   console.log("request recieved");
//   // res.send("This is a basic response");
// //   res.send({
// //     fruit: "Apple",
// //     color: "Red",
// //   });
//   res.send("<h1>This is a response for the request</h1>")
// });

app.get("/", (req, res) => {
  res.send("You contacted rooth path");
});
// app.get("/search", (req, res) => {
//   res.send("You contacted search path");
// });
app.get("/home", (req, res) => {
  res.send("You contacted home path");
});

// app.get("*", (req, res) => {
//   res.send("this path does not exits");
// });

app.post("/", (req, res) => {
  res.send("This is a post request..");
});


//path parameters
app.get("/:username/:id",(req,res) =>{
    let {username,id} = req.params;
    let htmlStr = `<h1>hello i am ${username} my id is ${id}</h1>`
    res.send(htmlStr);
});

app.get("/search", (req,res) =>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>This query does not exits</h1>")
    };
    res.send(`<h1>these are the search results ${q}</h1>`);
});
