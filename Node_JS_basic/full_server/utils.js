import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const lines = data.trim().split('\n');
      const result = {};

      // Assume the CSV first line is headers: firstname,lastname,age,field
      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      lines.slice(1).forEach(line => {
        const parts = line.split(',');
        const field = parts[fieldIndex].trim();
        const firstname = parts[firstNameIndex].trim();

        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      });

      resolve(result);
    });
  });
}
