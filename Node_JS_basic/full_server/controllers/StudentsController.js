import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2]; // الملف يجي كأرجومنت
    try {
      const data = await readDatabase(dbFile);
      let response = 'This is the list of our students\n';
      Object.keys(data).sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
        .forEach(field => {
          response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const major = req.params.major;
    if (!['CS','SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(dbFile);
      if (!data[major]) data[major] = [];
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
