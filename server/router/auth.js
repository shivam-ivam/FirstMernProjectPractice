const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../Database/dbConnection");
const User = require("../Database/dbSchema");

router.get("/", (req, res) => {
  res.send("router home call");
});

//                                                        register route

router.post("/register", async (req, res) => {
  const { name, studentId, password } = req.body;
  if (!name || !studentId || !password) {
    return res.status(422).json({ error: "Plz fill all the details" });
  }

  try {
    const userExist = await User.findOne({ studentId: studentId });

    if (userExist) {
      return res.status(422).json({ error: "student already exist" });
    }

    const user = new User({
      name: name,
      studentId: studentId,
      password: password,
    });

    await user.save();
    res.status(201).json({ message: "student data added successfully" });
  } catch (error) {
    console.log(err);
  }
});

//              login route

router.post("/login", async (req, res) => {
  const { studentId, password } = req.body;

  if (!password || !studentId) {
    return res.status(422).json({ error: "plz fill all the fields" });
  }

  try {
    const userExist = await User.findOne({
      studentId: studentId,
    });
    if (!userExist) {
      return res.status(422).json({ message: "creditional are invalid" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(401).json({ error: "wrong password" });
    }
    const token = await userExist.generateAuthToken();          ////////////            token generation 
    console.log(token);
    return res.status(200).json(userExist);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// in post man in header => Content-Type  application/json
