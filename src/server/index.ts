import path from 'path';
import express from 'express';
import url from 'url';

import { resizeAndWrite, RESIZED_IMAGES_DIR } from './utils/resizeAndWrite';

const app = express();
const PORT = 3000;

app.get('/api/images', (req: express.Request, res: express.Response): void => {
  const { filename, width, height } = url.parse(req.url, true).query;

  const resizedImg = resizeAndWrite(
    String(filename),
    Number(width),
    Number(height)
  );

  res.sendFile(path.join(RESIZED_IMAGES_DIR, resizedImg));
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
