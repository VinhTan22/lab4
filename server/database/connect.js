const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/drugdb');
    console.log("📦 Database successfully connected at 127.0.0.1");
  } catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  }
};

module.exports = connectMongo;
