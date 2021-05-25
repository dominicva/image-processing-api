import path from 'path';
import express from 'express';

import {
  parseQueryToFilename,
  resizeAndWrite,
  ORIGINAL_IMAGES_DIR,
  RESIZED_IMAGES_DIR,
} from './utils/resizeAndWrite';

import processImg from './utils/processImage';
console.log(processImg);

const app = express();
const PORT = 3000;

app.get(
  '/api/images',
  async (req: express.Request, res: express.Response, next) => {
    const { filename, width, height, format, metadata, effect } = req.query;

    const inputFile = path.join(ORIGINAL_IMAGES_DIR, String(filename));
    console.log('inputFile', inputFile);

    let outputFile: string | undefined;

    if (width && height) {
      // resize
      outputFile = await processImg.resize(
        inputFile,
        Number(width),
        Number(height)
      );
    } else if (format) {
      // convert to specified format
      outputFile = await processImg.reformat(inputFile, String(format));
      console.log('outputFile', outputFile);
    } else if (metadata) {
      // get meta data
    } else if (effect) {
      // apply correct effect – currently grayscale or blur
    }

    res.end();
  }
);

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);

// uses sharp to resize the image and write it to new file in 'resized' dir
//  await resizeAndWrite(String(filename), Number(width), Number(height));

// filepath to the resized image
// const resizedImg = path.join(
//   RESIZED_IMAGES_DIR,
//   parseQueryToFilename(String(filename), Number(width), Number(height))
// );

// hack to delay sendFile until new image creation complete
// setTimeout(() => {
//   // send newly resized image file
//   res.sendFile(resizedImg);
// }, 200);
