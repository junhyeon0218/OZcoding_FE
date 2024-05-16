const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isLoggedIn = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not logged in",
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "invalid token",
    });
  }
};
