import { readDatabase } from '../utils.js';

class StudentsController {
  // ...methods

  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const data = await readDatabase(dbFile);
      let response = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      fields.forEach((field) => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    const dbFile = process.argv[2];
    try {
      const data = await readDatabase(dbFile);
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
