import path from 'path';
import express from 'express';

import {
  parseQueryToFilename,
  resizeAndWrite,
  RESIZED_IMAGES_DIR,
} from './utils/resizeAndWrite';

const app = express();
const PORT = 3000;

app.get('/api/images', (req: express.Request, res: express.Response, next) => {
  const { filename, width, height } = req.query;

  // uses sharp to resize the image and write it to new file in 'resized' dir
  resizeAndWrite(String(filename), Number(width), Number(height));

  // filepath to the resized image
  const resizedImg = path.join(
    RESIZED_IMAGES_DIR,
    parseQueryToFilename(String(filename), Number(width), Number(height))
  );

  // attempt to send newly resized image file
  res.sendFile(resizedImg);
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
