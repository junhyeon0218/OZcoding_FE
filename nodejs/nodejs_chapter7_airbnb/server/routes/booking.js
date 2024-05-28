const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const {
  creatBookings,
  getBookings,
} = require("../controllers/bookingController");

router.route("/").post(isLoggedIn, creatBookings);
router.route("/").get(isLoggedIn, getBookings);

module.exports = router;
