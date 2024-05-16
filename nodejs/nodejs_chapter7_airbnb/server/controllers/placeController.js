const Place = require("../models/Place");

exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json({
      places,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.userPlaces = async (req, res) => {
  try {
    const userData = req.user;
    const id = userData.id;
    res.status(200).json(await Place.find({ owner: id }));
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.singlePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);

    if (!place) {
      return res.status(400).json({
        message: "Place not found",
      });
    }

    res.status(200).json({ place });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.searchPlaces = async (req, res) => {
  try {
    const searchWord = req.params.key;

    if (searchWord === "") return res.status(200).json(await Place.find());

    const searchMatches = await Place.find({
      address: { $regex: searchWord, $options: "i" },
    });

    res.status(200).json(searchMatches);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.addPlace = async (req, res) => {
  try {
    const userData = req.user;

    const {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    } = req.body;

    const place = await Place.create({
      onwer: userData._id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      maxGuests,
      price,
    });
    res.status(200).json({
      place,
    });
  } catch (error) {
    req.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};
