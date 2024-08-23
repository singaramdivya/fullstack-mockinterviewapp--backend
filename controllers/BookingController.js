// // BookingController.js
// const db = require('../db/database');

// exports.createBooking = (req, res) => {
//     const { student_id, mentor_id, start_time, end_time, duration } = req.body;
//     const sql = "INSERT INTO bookings (student_id, mentor_id, start_time, end_time, duration) VALUES (?, ?, ?, ?, ?)";
//     db.run(sql, [student_id, mentor_id, start_time, end_time, duration], function (err) {
//         if (err) {
//             return res.status(500).json({ error: err.message });
//         }
//         res.json({ booking_id: this.lastID });
//     });
// };









const db = require('../db/database');

exports.createBooking = (req, res) => {
    const { student_id, mentor_id, start_time, end_time, duration } = req.body;
    const sql = "INSERT INTO bookings (student_id, mentor_id, start_time, end_time, duration) VALUES (?, ?, ?, ?, ?)";
    db.run(sql, [student_id, mentor_id, start_time, end_time, duration], function (err) {
        if (err) {
            console.error('Error inserting booking:', err.message);
            return res.status(500).json({ error: 'Error creating booking' });
        }
        res.status(201).json({ booking_id: this.lastID });
    });
};

