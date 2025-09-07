import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n'); // chaque ligne du CSV
      const students = {};

      // on saute la première ligne si c'est l'en-tête
      const header = lines.shift();

      for (const line of lines) {
        const [firstname,, , field] = line.split(','); // prénom = colonne 0, field = colonne 3
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
}


