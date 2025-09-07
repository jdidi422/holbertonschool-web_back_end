import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      const fields = {};

      lines.slice(1).forEach((line) => {
        const values = line.split(',');
        const field = values[fieldIndex];
        const firstName = values[firstNameIndex];

        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      resolve(fields);
    });
  });
}

export default readDatabase;