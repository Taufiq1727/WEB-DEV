const { faker, tr } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { CONNREFUSED } = require("dns");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "Taushi1727@",
});

const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
//HOME ROUTE
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) AS count FROM user";

  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }

    console.log(result); // Check what MySQL returns

    let count = result[0].count;

    res.render("home", { count });
  });
});

//SHOW ROUTE
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
      // res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("some err in DB");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
      // res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("some err in DB");
  }
});

//EDIT ROUTE
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: Formpass, username: Newusername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (Formpass != user.password) {
        res.send("Wrong passoword");
      } else {
       let q2 = `UPDATE user SET username='${Newusername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      
      
    });
  } catch (err) {
    console.log(err);
    res.send("some err in DB");
  }
});

app.listen("8001", () => {
  console.log("App is listining in port 8001");
});
