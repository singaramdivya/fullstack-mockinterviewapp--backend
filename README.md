Overview:
The CareerCarve Mentor-Student Scheduling Platform is a Node.js-based backend application designed to facilitate the scheduling of mentor-student sessions. This platform allows
students to book sessions with mentors, select areas of interest, and make payments. It supports mentor availability management, premium mentor selection, and session booking.

Table of Contents:

->Technologies Used
->Project Structure
->Setup Instructions
->Environment Variables
->API Endpoints
->Mentors
->Bookings
->Database Schema
->Error Handling
->Future Enhancements

Technologies Used:

Node.js: JavaScript runtime for building server-side applications.
Express.js: Web framework for Node.js used to create RESTful APIs.
SQLite3: Lightweight SQL database engine.
Axios: Promise-based HTTP client for making API requests.

Setup Instructions:
Ensure you have the following installed on your system:

Node.js (v14.x or later)
npm (v6.x or later)
SQLite3 (comes built-in with Node.js)

Installation:
Clone the Repository:

git clone https://github.com/singaramdivya/fullstack-mockinterviewapp--backend.git
cd career-carve-backend

Install Dependencies:

npm install

Run Database Migrations:
Set up the database schema by running the following command:

bash
Copy code
npx knex migrate:latest --knexfile ./src/db/knexfile.js
Start the Server:

Run the server in development mode:

npm run dev

The server will be available at http://localhost:5000.

Environment Variables:

The application requires the following environment variables to be set in a .env file at the root of the project:

PORT=5000
DB_CLIENT=sqlite3
DB_FILENAME=./src/db/database.js
NODE_ENV=development

API Endpoints:
Mentors:
Get Mentors by Area of Expertise:

Endpoint: GET /api/mentors
Description: Retrieve mentors based on their area of expertise.
Parameters:
area_of_expertise (query): The area of expertise to filter mentors by.
Response:
Status: 200 OK
Body: [{ id, name, areas_of_expertise, availability, is_premium }, ...]
Example Request:
bash
Copy code
GET /api/mentors?area_of_expertise=Finance
Example Response:
json
Copy code
[
  {
    "id": 1,
    "name": "John Doe",
    "areas_of_expertise": ["Finance"],
    "availability": ["2024-08-22T19:00:00", "2024-08-22T19:30:00"],
    "is_premium": true
  },
  ...
]
Bookings
Create a Booking
Endpoint: POST /api/bookings
Description: Book a session with a mentor.
Request Body:
student_id (integer): The ID of the student booking the session.
mentor_id (integer): The ID of the mentor being booked.
start_time (string): Start time of the session (ISO format).
end_time (string): End time of the session (ISO format).
duration (integer): Duration of the session in minutes.
cost (number): The total cost of the session.
Response:
Status: 201 Created
Body: { "message": "Booking confirmed", "booking_id": <id> }
Example Request:
bash
Copy code
POST /api/bookings
Example Request Body:
json
Copy code
{
  "student_id": 1,
  "mentor_id": 2,
  "start_time": "2024-08-22T19:00:00",
  "end_time": "2024-08-22T19:30:00",
  "duration": 30,
  "cost": 2000
}
Database Schema
Mentors Table
id: INTEGER PRIMARY KEY
name: TEXT
areas_of_expertise: TEXT (JSON string of areas)
availability: TEXT (JSON string of available times)
is_premium: BOOLEAN
Bookings Table
id: INTEGER PRIMARY KEY
student_id: INTEGER
mentor_id: INTEGER
start_time: DATETIME
end_time: DATETIME
duration: INTEGER
cost: REAL
Error Handling
All errors are managed through a custom error handling middleware located in src/middleware/errorMiddleware.js. Common HTTP errors such as 400 Bad Request and 500 Internal Server Error are handled gracefully with informative messages.

Future Enhancements
Payment Integration: Integrate a payment gateway like Stripe or PayPal.
Notification System: Implement email or SMS notifications for session reminders.
Admin Dashboard: Develop an admin dashboard to manage mentors, bookings, and payments.
Availability Calendar: Enhance mentor availability management with a calendar view.
