import fs from 'fs';
import path from 'path';
import express from 'express';
import sharp from 'sharp';

const app = express();
const PORT = 3000;

const ORIGINAL_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  'images',
  'originals'
);

const RESIZED_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  'images',
  'resized'
);

async function semiTransparentRedPng() {
  sharp(path.join(ORIGINAL_IMAGES_DIR, 'fjord.jpg'))
    .resize(300, 200)
    .toFile(path.join(RESIZED_IMAGES_DIR, 'output.jpg'), function (err) {
      // output.jpg is a 300 pixels wide and 200 pixels high image
      // containing a scaled and cropped version of input.jpg
    });
}

app.get('/api', async (req: express.Request, res: express.Response) => {
  await semiTransparentRedPng();

  res.send('hello worl');
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
