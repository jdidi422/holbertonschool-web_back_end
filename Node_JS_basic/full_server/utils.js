import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const result = {};

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const field = row[3]; // Assuming "field" is column 4
        if (!result[field]) result[field] = [];
        result[field].push(row[0]); // Assuming "firstname" is column 1
      }

      resolve(result);
    });
  });
}
