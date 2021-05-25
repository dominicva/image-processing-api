import path from 'path';
import sharp from 'sharp';
import fs from 'fs';

const ORIGINAL_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  '../',
  'images',
  'originals'
);

const PROCESSED_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  '../',
  'images',
  'processed'
);

const parseQueryToFilename = function (
  filename: string,
  width: number,
  height: number
): string {
  // slice filename to remove .png extension
  return `${filename.slice(0, -4)}-${width}x${height}.jpg`;
};

const resizeAndWrite = async function (
  inputImg: string,
  width: number,
  height: number
): Promise<void> {
  try {
    const resizedFileName = parseQueryToFilename(inputImg, width, height);

    const image = await sharp(path.join(ORIGINAL_IMAGES_DIR, inputImg))
      .resize(width, height)
      .png()
      .toBuffer();
    // .toFile(path.join(RESIZED_IMAGES_DIR, resizedFileName), function (err) {
    //   console.error(err);
    // });
    console.log(image);
    fs.writeFileSync(resizedFileName, image);

    // console.log(info);
  } catch (err) {
    console.error(err);
  }
};

export {
  parseQueryToFilename,
  resizeAndWrite,
  ORIGINAL_IMAGES_DIR,
  PROCESSED_IMAGES_DIR,
};
