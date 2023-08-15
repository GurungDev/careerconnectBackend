const mongoose = require("mongoose");
require("dotenv").config();
const connectToDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "career_connect",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
