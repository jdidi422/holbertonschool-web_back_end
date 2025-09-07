import express from 'express';
import router from './routes/index.js'; // correspond à export default

const app = express();

app.use(router); // ✅ ça doit fonctionner maintenant

const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
