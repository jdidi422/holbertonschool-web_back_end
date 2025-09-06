import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const students = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!students[field]) students[field] = [];
          students[field].push(firstname);
        }
      });

      resolve(students);
    });
  });
}
