// bookingRoutes.js
const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');

router.post('/bookings', BookingController.createBooking);

module.exports = router;