import express from 'express';
import processQuery from './routes/processQuery';

const PORT = 3000;

const app = express();

app.get('/api/images', processQuery);

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);

export default app;
