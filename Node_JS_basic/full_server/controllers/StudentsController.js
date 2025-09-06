import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const students = await readDatabase(dbFile);
      let response = 'This is the list of our students\n';
      Object.keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(dbFile);
      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
