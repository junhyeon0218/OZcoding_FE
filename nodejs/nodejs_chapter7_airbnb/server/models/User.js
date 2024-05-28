const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
    default:
      "https://cdn2.ppomppu.co.kr/zboard/data3/2022/0509/20220509173224_d9N4ZGtBVR.jpeg",
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidatedPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
