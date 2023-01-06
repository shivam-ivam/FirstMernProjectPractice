const express = require("express");
const env = require("dotenv");
const { Router } = require("express");
const app = express();
require("./Database/dbConnection"); // mongo atlas connection

env.config({ path: "./config.env" });

// const User = require("./Database/dbSchema"); // data base schema 

// json to object middleware
app.use(express.json());

// Router
app.use(require("./router/auth"));


const middleware = (req, res, next) => { // middleware 
  console.log("middleware");
  next();
};

// app.get("/", middleware, (req, res) => {
//   res.send("this is home route");
// });
app.get("/about", (req, res) => {
  res.send("this is about route");
});
app.get("/contact", (req, res) => {
  res.send("this is contact route");
});
app.get("/signup", (req, res) => {
  res.send("this is signup route");
});
app.get("/signin", (req, res) => {
  res.send("this is signin route");
});

app.listen(process.env.PORT, () => {
  console.log(`server is started at port ${process.env.PORT}`);
});
