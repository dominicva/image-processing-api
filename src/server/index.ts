import path from 'path';
import express from 'express';
import processQuery from './routes/processQuery';
import { CLIENT } from './utils/dirPaths';
import help from './routes/help';

const PORT = 3000;

const app = express();
app.use(express.static(CLIENT));

app.get('/api/images', processQuery);

app.get('/*', help);

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);

export default app;
