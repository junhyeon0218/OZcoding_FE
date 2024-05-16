const User = require("../models/User");
const cookieToken = require("../utils/cookieToken");
const cloudinary = require("cloudinary").v2;

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "name, email and password are required",
      });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    user = await User.create({
      name,
      email,
      password,
    });

    cookieToken(user, res);
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const isMatch = await user.isValidatedPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    cookieToken(user, res);
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};

exports.updateUserDetails = async (req, res) => {
  try {
    const { name, password, email, picture } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
      });
    }

    user.name = name;

    if (picture && !password) {
      user.picture = picture;
    } else if (password && !picture) {
      user.password = password;
    } else if (password && picture) {
      user.password = password;
      user.picture = picture;
    }

    const updatedUser = await user.save();
    cookieToken(updatedUser, res);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged out successfully",
    });
};

exports.uploadPicture = async (req, res) => {
  const { path } = req.file;
  try {
    let result = await cloudinary.uploader.upload(path, {
      folder: "Airbnb/Users",
    });
    res.status(200).json(result.secure_url);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};
