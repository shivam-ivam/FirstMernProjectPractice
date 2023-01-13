const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const { Router } = require("express");
const app = express();
require("./Database/dbConnection"); // mongo atlas connection

env.config({ path: "./config.env" });

app.use(cookieParser());
// const User = require("./Database/dbSchema"); // data base schema 

// json to object middleware
app.use(express.json());

// cors 
app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true,
}));


// Router
app.use(require("./router/auth"));

app.listen(process.env.PORT, () => {
  console.log(`server is started at port ${process.env.PORT}`);
});
