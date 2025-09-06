import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2]; // filename passed to server.js
    try {
      const data = await readDatabase(dbFile);
      let output = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of fields) {
        output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      }

      res.status(200).send(output.trim());
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
      const data = await readDatabase(dbFile);
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
