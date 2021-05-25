import path from 'path';
import express from 'express';

import processImg from './utils/processImage';

const app = express();
const PORT = 3000;

const ORIGINAL_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  'images',
  'originals'
);

app.get(
  '/api/images',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const {
      filename,
      width,
      height,
      format,
      metadata,
      blurFactor,
      toGrayscale,
    } = req.query;

    const inputFile = path.join(ORIGINAL_IMAGES_DIR, String(filename));

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
    } else if (metadata) {
      // get meta data
    } else if (blurFactor) {
      outputFile = await processImg.blur(inputFile, Number(blurFactor));
    } else if (toGrayscale) {
      outputFile = await processImg.grayscale(inputFile);
    }

    if (outputFile) {
      res.sendFile(String(outputFile));
    } else {
      res.send('Please try entering a valid url');
    }
  }
);

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
