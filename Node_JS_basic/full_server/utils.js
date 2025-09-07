import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) return reject(err);

      const lines = data.trim().split('\n');
      const result = {};
      const headers = lines[0].split(',');
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const field = row[3]; // assuming 4th column is field
        if (!result[field]) result[field] = [];
        result[field].push(row[0]); // assuming 1st column is firstname
      }
      resolve(result);
    });
  });
}


