import path from 'path';
import express from 'express';
import processQuery from './routes/processQuery';
import { CLIENT } from './utils/dirPaths';

const PORT = 3000;

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(CLIENT, 'index.html'));
});

app.get('/api/images', processQuery);

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);

export default app;
