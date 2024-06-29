const mongoose = require("mongoose"); //import mongoose
const colors = require("colors");

//function to create connection to database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Runnnig on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
