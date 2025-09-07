import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];

    readDatabase(path)
      .then((fields) => {
        const sortedFields = Object.keys(fields).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        ));

        let result = 'This is the list of our students';
        sortedFields.forEach((field) => {
          result += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        });

        res.status(200).send(result);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((fields) => {
        const names = fields[major];
        res.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;