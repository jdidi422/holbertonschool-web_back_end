import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err);

      const lines = data.trim().split('\n');
      const result = {};
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const field = row[3]; // assume 4th column is "field" (CS/SWE)
        const firstName = row[0]; // assume 1st column is firstname
        if (!result[field]) result[field] = [];
        result[field].push(firstName);
      }
      resolve(result);
    });
  });
}
