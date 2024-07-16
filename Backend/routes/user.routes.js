const express = require("express");
const { userModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

// Middleware to parse JSON requests
userRouter.use(express.json());

// GET all users
userRouter.get("/user", (req, res) => {
  res.json({ message: "Hello, this is the /api/user endpoint" });
});

// GET users with optional query parameters
userRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const users = await userModel.find(query);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// User registration
userRouter.post("/register", async (req, res) => {
  const { email, password, first_name, last_name, ph_no } = req.body;
  try {
    const secure_password = await bcrypt.hash(password, 5);
    const user = new userModel({
      first_name,
      last_name,
      ph_no,
      email,
      password: secure_password,
    });
    await user.save();
    res.json({ message: "Registered" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error in registering the user" });
  }
});

// User login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Wrong Credential" });
    }
    const hashed_password = user.password;
    const result = await bcrypt.compare(password, hashed_password);
    if (result) {
      const token = jwt.sign({ userID: user._id }, "masai");
      res.json({ msg: "Login Successful", token: token });
    } else {
      res.status(401).json({ error: "Wrong Credential" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = {
  userRouter,
};
