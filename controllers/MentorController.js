// const db = require('../db/database');

// exports.getAllMentors = (req, res) => {
//     db.all("SELECT * FROM mentors", [], (err, rows) => {
//         if (err) {
//             console.error('Error fetching mentors:', err.message);
//             return res.status(500).json({ error: 'Error fetching mentors' });
//         }
//         res.json(rows);
//     });
// };




const db = require('../db/database');

exports.getMentorsByInterest = (req, res) => {
    const { area_of_interest } = req.query;
    let sql = "SELECT * FROM mentors";
    let params = [];
    
    if (area_of_interest) {
        sql += " WHERE areas_of_expertise LIKE ?";
        params.push(`%${area_of_interest}%`);
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};
