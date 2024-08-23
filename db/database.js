// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('mockinterview.db', (err) => {
//     if (err) {
//         console.error('Could not connect to database', err);
//     } else {
//         console.log('Connected to database');
//     }
// });
// db.serialize(() => {
//     // Drop tables if they exist
//     db.run('DROP TABLE IF EXISTS bookings');
//     db.run('DROP TABLE IF EXISTS students');
//     db.run('DROP TABLE IF EXISTS mentors');

//     // Create Mentors Table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS mentors (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             availability TEXT NOT NULL,
//             areas_of_expertise TEXT NOT NULL,
//             is_premium BOOLEAN NOT NULL
//         )
//     `);

//     // Create Students Table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS students (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT NOT NULL,
//             area_of_interest TEXT NOT NULL
//         )
//     `);

//     // Create Bookings Table
//     db.run(`
//         CREATE TABLE IF NOT EXISTS bookings (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             student_id INTEGER NOT NULL,
//             mentor_id INTEGER NOT NULL,
//             start_time DATETIME NOT NULL,
//             end_time DATETIME NOT NULL,
//             duration INTEGER NOT NULL,
//             FOREIGN KEY(student_id) REFERENCES students(id),
//             FOREIGN KEY(mentor_id) REFERENCES mentors(id)
//         )
//     `);

//     // Insert Dummy Data
//     db.run(`
//         INSERT INTO mentors (name, areas_of_expertise, availability, is_premium)
//         VALUES ('John Doe', 'Finance', '["2024-08-22T19:00:00", "2024-08-22T19:30:00"]', 0),
//                 ('Jane Smith', 'Marketing', '["2024-08-22T20:00:00", "2024-08-22T21:00:00"]', 1)
//     `);

//     // db.run(`
//     //     INSERT INTO mentors (name, areas_of_expertise, availability, is_premium)
//     //     VALUES ('Jane Smith', 'Marketing', '["2024-08-22T20:00:00", "2024-08-22T21:00:00"]', 1)
//     // `);

//     db.run(`
//         INSERT INTO students (name, area_of_interest)
//         VALUES ('Alice Smith', 'Finance')
//     `);

//     // Close the database connection
//     db.close((err) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log('Database connection closed.');
//     });
// });

// module.exports = db;

































const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mockinterview.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database');
    }
});

db.serialize(() => {
    // Drop tables if they exist
    db.run('DROP TABLE IF EXISTS bookings');
    db.run('DROP TABLE IF EXISTS students');
    db.run('DROP TABLE IF EXISTS mentors');

    // Create Mentors Table
    db.run(`
        CREATE TABLE IF NOT EXISTS mentors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            availability TEXT NOT NULL,
            areas_of_expertise TEXT NOT NULL,
            is_premium BOOLEAN NOT NULL
        )
    `);

    // Create Students Table
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            area_of_interest TEXT NOT NULL
        )
    `);

    // Create Bookings Table
    db.run(`
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER NOT NULL,
            mentor_id INTEGER NOT NULL,
            start_time DATETIME NOT NULL,
            end_time DATETIME NOT NULL,
            duration INTEGER NOT NULL,
            FOREIGN KEY(student_id) REFERENCES students(id),
            FOREIGN KEY(mentor_id) REFERENCES mentors(id)
        )
    `);

    // Insert Dummy Data
    db.run(`
        INSERT INTO mentors (name, areas_of_expertise, availability, is_premium)
VALUES 
    ('John Doe', 'Finance', '["2024-08-22T19:00:00", "2024-08-22T19:30:00"]', 'true'),
    ('Jane Smith', 'Marketing', '["2024-08-22T20:00:00", "2024-08-22T21:00:00"]', 'false'),
    ('Michael Johnson', 'Operations Management', '["2024-08-23T14:00:00", "2024-08-23T15:00:00"]', 'true'),
    ('Emily Davis', 'Human Resources', '["2024-08-23T16:00:00", "2024-08-23T17:00:00"]', 'false'),
    ('William Brown', 'Marketing', '["2024-08-24T09:00:00", "2024-08-24T10:00:00"]', 'true'),
    ('Sophia Wilson', 'Finance', '["2024-08-24T11:00:00", "2024-08-24T12:00:00"]', 'false'),
    ('James Taylor', 'Supply Chain Management', '["2024-08-25T13:00:00", "2024-08-25T14:00:00"]', 'true'),
    ('Olivia Martin', 'Business Analytics', '["2024-08-25T15:00:00", "2024-08-25T16:00:00"]', 'false'),
    ('David Anderson', 'Business Analytics', '["2024-08-26T17:00:00", "2024-08-26T18:00:00"]', 'true'),
    ('Isabella Thompson', 'Operations Management', '["2024-08-26T18:30:00", "2024-08-26T19:30:00"]', 'false'),
    ('Lucas Garcia', 'Leadership', '["2024-08-27T09:00:00", "2024-08-27T10:00:00"]', 'true'),
    ('Mia Martinez', 'Innovation Management', '["2024-08-27T11:00:00", "2024-08-27T12:00:00"]', 'false'),
    ('Benjamin Hernandez', 'Project Management', '["2024-08-28T13:00:00", "2024-08-28T14:00:00"]', 'true'),
    ('Charlotte Clark', 'Risk Management', '["2024-08-28T15:00:00", "2024-08-28T16:00:00"]', 'false'),
    ('Alexander Lewis', 'Digital Marketing', '["2024-08-29T17:00:00", "2024-08-29T18:00:00"]', 'true'),
    ('Amelia Walker', 'Corporate Governance', '["2024-08-29T18:30:00", "2024-08-29T19:30:00"]', 'false');

    `);

    db.run(`
        INSERT INTO students (name, area_of_interest)
        VALUES ('Alice Smith', 'Finance')
    `);
});

module.exports = db;
