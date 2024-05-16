const express = require("express");
const router = express.Router();
const {
  addPlace,
  getPlaces,
  userPlaces,
  singlePlace,
  searchPlaces,
} = require("../controllers/placeController");
const { isLoggedIn } = require("../middlewares/isLoggedIn");

router.route("/").post(isLoggedIn, addPlace);
router.route("/").get(getPlaces);
router.route("/user").get(isLoggedIn, userPlaces);
router.route("/:id").get(singlePlace);
router.route("/search/:key").get(searchPlaces);

module.exports = router;
