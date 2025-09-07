import fs from 'fs';

import path from 'path';


export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const headers = lines.shift().split(',');
        const result = {};

        lines.forEach((line) => {
          const values = line.split(',');
          const firstName = values[0];
          const major = values[3];
          if (!result[major]) result[major] = [];
          result[major].push(firstName);
        });

        resolve(result);
      }
    });
  });
}
