const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  if (plainPassword === this.password) {
    cb(null, true);
  } else {
    cb(null, false);
  }
  // return cb({ error: "error" });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
