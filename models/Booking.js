// class Booking {
//     constructor(id, student_id, mentor_id, start_time, end_time, duration) {
//         this.id = id;
//         this.student_id = student_id;
//         this.mentor_id = mentor_id;
//         this.start_time = start_time;
//         this.end_time = end_time;
//         this.duration = duration;
//     }
// }

// module.exports = Booking;



const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/database'); // Adjust the path to your database config

const Booking = sequelize.define('Booking', {
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mentor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'bookings', // Ensure this matches your database table name
    timestamps: false
});

module.exports = Booking;
