# Full Server - Node.js/Express

This project implements a small HTTP server using Express that reads a CSV database of students and exposes endpoints to display student information.

## Project Structure


├── controllers/
│ ├── AppController.js
│ └── StudentsController.js
├── routes/
│ └── index.js
├── utils.js
├── server.js
├── database.csv
├── package.json
└── .babelrc

## Setup

1. Install dependencies:

```bash
npm install
Run the server:
Run the server:
Endpoints

GET /
Returns: Hello Holberton School!

GET /students
Returns a list of all students, grouped by field (CS, SWE), with counts and first names.

GET /students/:major
Replace :major with CS or SWE. Returns the list of students in that major.
If another major is provided, returns an error: Major parameter must be CS or SWE.
curl localhost:1245
# Hello Holberton School!

curl localhost:1245/students
# This is the list of our students
# Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
# Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy

curl localhost:1245/students/CS
# List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie

curl localhost:1245/students/French
# Major parameter must be CS or SWE
