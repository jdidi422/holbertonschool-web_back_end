import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        const lines = content.trim().split('\n');
        const result = {};
        lines.slice(1).forEach((line) => {
          const [firstname, , field] = line.split(',');
          if (!result[field]) result[field] = [];
          result[field].push(firstname);
        });
        resolve(result);
      }
    });
  });
}
