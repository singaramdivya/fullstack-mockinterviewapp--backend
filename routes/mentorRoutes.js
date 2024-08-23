// // mentorRoutes.js
// const express = require('express');
// const router = express.Router();
// const MentorController = require('../controllers/MentorController');

// router.get('/mentors', MentorController.getAllMentors);

// module.exports = router;








const express = require('express');
const router = express.Router();
const MentorController = require('../controllers/MentorController');

// Existing endpoint
// router.get('/mentors', MentorController.getAllMentors);

// New endpoint to get mentors by area of interest
router.get('/mentors', MentorController.getMentorsByInterest);

module.exports = router;
