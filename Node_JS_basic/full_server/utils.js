import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const lines = data.trim().split('\n');
      if (lines.length < 2) return resolve({}); 
      

      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      if (fieldIndex === -1 || firstNameIndex === -1) {
        return reject(new Error('CSV headers missing'));
      }

      const result = {};

      lines.slice(1).forEach(line => {
        if (!line.trim()) return; 
        const parts = line.split(',');
        const field = parts[fieldIndex].trim();
        const firstname = parts[firstNameIndex].trim();

        if (!result[field]) result[field] = [];
        result[field].push(firstname);
      });

      resolve(result);
    });
  });
}
