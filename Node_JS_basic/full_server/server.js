import express from 'express';
const router = require('./routes/index.js');


const app = express();

app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
