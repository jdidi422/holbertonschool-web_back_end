import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const header = lines.shift().split(',');
      const students = {};

      for (const line of lines) {
        const record = line.split(',');
        const firstName = record[0].trim();
        const field = record[3].trim();
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      }
      resolve(students);
    });
  });
}
