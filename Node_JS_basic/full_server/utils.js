// full_server/utils.js
import fs from 'fs';
import path from 'path';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    // نتحققو من وجود الملف
    fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const result = {};
      const headers = lines[0].split(',');

      // نمروا على كل سطر ما عدا الرأس
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const student = {};
        headers.forEach((header, idx) => {
          student[header] = row[idx];
        });

        const field = student.field;
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(student.firstname);
      }

      resolve(result);
    });
  });
}
