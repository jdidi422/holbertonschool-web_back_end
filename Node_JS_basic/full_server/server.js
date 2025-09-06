import express from 'express';
import router from './routes/index.js';

const app = express();
const databaseFile = process.argv[2]; 


app.use((req, res, next) => {
  req.databaseFile = databaseFile;
  next();
});

app.use('/', router);

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

export default app;
