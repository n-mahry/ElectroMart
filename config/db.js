const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use MONGO_URI from environment, fallback to local MongoDB
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/electromart";

    await mongoose.connect(mongoURI);

    console.log(`✅ MongoDB connected: ${mongoURI}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
