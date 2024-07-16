// configs/db.js

const mongoose = require("mongoose");
require("dotenv").config();
uri = "mongodb+srv://adityakonda:RiZrjRL9ypiCHXu4@lenskart.t8arqcx.mongodb.net/adityakonda?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


module.exports = connectDB; // Export the mongoose instance for use in other parts of your application
