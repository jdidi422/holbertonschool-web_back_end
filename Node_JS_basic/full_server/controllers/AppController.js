
static getAllStudentsByMajor(req, res) {
  const { major } = req.params;
  if (major !== 'CS' && major !== 'SWE') {
    return res.status(500).send('Major parameter must be CS or SWE');
  }

  readDatabase(process.argv[2])
    .then((students) => {
      const list = students[major] || [];
      res.status(200).send(List: ${list.join(', ')});
    })
    .catch(() => {
      res.status(500).send('Cannot load the database');
    });
}