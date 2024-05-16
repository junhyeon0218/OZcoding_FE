const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp" });
const cloudinary = require("cloudinary").v2;

router.post("/upload", upload.array("photos", 100), async (req, res) => {
  try {
    let imageArray = [];
    for (let i = 0; i < req.files.length; i++) {
      let { path } = req.files[i];
      const result = await cloudinary.uploader.upload(path, {
        folder: "Airbnb/Places",
      });

      imageArray.push(result.secure_url);
    }

    res.status(200).json(imageArray);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
});

router.use("/user", require("./user"));
router.use("/places", require("./place"));
router.use("/bookings", require("./booking"));

module.exports = router;
