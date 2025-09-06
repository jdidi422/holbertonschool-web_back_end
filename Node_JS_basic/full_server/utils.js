import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const students = {};
      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(',');
        const field = row[3];
        if (!students[field]) students[field] = [];
        students[field].push(row[0]); // first name
      }
      resolve(students);
    });
  });
}

export default readDatabase;
