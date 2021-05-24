import fs from 'fs';
import path from 'path';
import express from 'express';
import sharp from 'sharp';
// const { pathToRegexp, match, parse, compile } = require('path-to-regexp');
import url from 'url';
import querystring from 'querystring';

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

const resizeAndWrite = function (
  inputImg: string,
  width: number,
  height: number
): void {
  sharp(path.join(ORIGINAL_IMAGES_DIR, inputImg))
    .resize(width, height)
    .toFile(
      path.join(RESIZED_IMAGES_DIR, `${inputImg}-w${width}h${height}.jpg`),
      function (err) {
        console.error(err);
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
      }
    );
};

app.get('/api/images', (req: express.Request, res: express.Response): void => {
  const { filename, width, height } = url.parse(req.url, true).query;
  resizeAndWrite(String(filename), Number(width), Number(height));
  res.send('hello world');
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
