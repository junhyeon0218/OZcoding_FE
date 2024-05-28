const mongoose = require("mongoose");

const connectWithDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(`DB err: ${err}`);
      process.exit(1);
    });
};

module.exports = connectWithDB;
