

import { readDatabase } from './utils.js';

readDatabase('database.csv')
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
