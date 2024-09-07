require("dotenv").config();
const mongoose = require("mongoose");

const dbString = process.env.DB_URL
async function connectDB() {
    try {
      await mongoose.connect(dbString);
      console.log("Database connected successfully");
    } catch (err) {
      console.log(err.message);
    }
  }

module.exports = {connectDB}