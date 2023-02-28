const mongoose = require("mongoose");

const db = process.env.MONGO_IRL;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB conncted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
