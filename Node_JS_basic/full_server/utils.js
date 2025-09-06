import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);
      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');
      const fields = {};

      lines.forEach((line) => {
        const [firstname, , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      resolve(fields);
    });
  });
}
