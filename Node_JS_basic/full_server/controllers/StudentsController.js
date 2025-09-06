import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2]; // database.csv passed as argument
    try {
      const data = await readDatabase(database);
      let response = 'This is the list of our students\n';
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      fields.forEach((field) => {
        const names = data[field].join(', ');
        response += `Number of students in ${field}: ${data[field].length}. List: ${names}\n`;
      });
      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(database);
      const names = data[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

