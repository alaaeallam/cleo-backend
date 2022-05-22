const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/db" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

module.exports = connectDB;
