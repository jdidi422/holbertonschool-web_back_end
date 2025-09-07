import fs from 'fs';
import csv from 'csv-parser';

/**
 * readDatabase - Reads a CSV database and organizes student firstnames by field
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Object>} - Resolves with object of arrays per field
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const studentsByField = {};
    const results = [];

    
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        reject(err);
        return;
      }

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => results.push(row))
        .on('end', () => {
          results.forEach((student) => {
            const field = student.field || 'unknown';
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(student.firstname);
          });
          resolve(studentsByField);
        })
        .on('error', (error) => reject(error));
    });
  });
}
