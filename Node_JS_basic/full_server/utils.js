// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');
        const result = {};
        lines.forEach(line => {
          const values = line.split(',');
          const field = values[headers.indexOf('field')];
          const firstName = values[headers.indexOf('firstname')];
          if (!result[field]) result[field] = [];
          result[field].push(firstName);
        });
        resolve(result);
      }
    });
  });
}
