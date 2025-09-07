import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');
        const students = {};

        lines.forEach((line) => {
          const values = line.split(',');
          const firstName = values[0];
          const field = values[3];

          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        });

        resolve(students);
      }
    });
  });
}

