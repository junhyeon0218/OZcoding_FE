const Booking = require("../models/Booking");

exports.creatBookings = async (req, res) => {
  try {
    const userData = req.user;

    const { place, checkIn, checkOut, numOfGuests, name, phone, price } =
      req.body;

    const booking = await Booking.create({
      user: userData.id,
      place,
      checkIn,
      checkOut,
      numOfGuests,
      name,
      phone,
      price,
    });

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const userData = req.user;

    if (!userData) {
      return res.status(401).json({
        message: "you do not have permission",
      });
    }

    const bookings = await Booking.find({ user: userData.id }).populate(
      "place"
    );
    res.status(200).json({ bookings, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};
