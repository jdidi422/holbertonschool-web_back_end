import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift(); // enlever l'en-tête
      const students = {};

      for (const line of lines) {
        const [firstname,, , field] = line.split(','); // prénom index 0, field index 3
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
}
