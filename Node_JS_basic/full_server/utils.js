import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);
      const lines = data.trim().split('\n');
      const result = {};

      lines.slice(1).forEach((line) => {
        const [id, firstname, lastname, age, field] = line.split(',');
        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      });

      resolve(result);
    });
  });
}

