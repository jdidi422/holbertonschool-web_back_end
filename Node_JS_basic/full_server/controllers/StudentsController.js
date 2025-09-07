
import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(students).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of fields) {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }

      res.status(200).send(responseText.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      const errorMsg = 'Major parameter must be CS or SWE';
      res.writeHead(500, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(errorMsg),
      });
      res.end(errorMsg);
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;