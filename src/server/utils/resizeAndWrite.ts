import path from 'path';
import sharp from 'sharp';

const ORIGINAL_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  '../',
  'images',
  'originals'
);

const RESIZED_IMAGES_DIR = path.join(
  __dirname,
  '../',
  '../',
  '../',
  'images',
  'resized'
);

const parseQueryToFilename = function (
  filename: string,
  width: number,
  height: number
) {
  // slice filename to remove .png extension
  return `${filename.slice(0, -4)}-${width}x${height}.jpg`;
};

const resizeAndWrite = function (
  inputImg: string,
  width: number,
  height: number
): void {
  const resizedFileName = parseQueryToFilename(inputImg, width, height);

  sharp(path.join(ORIGINAL_IMAGES_DIR, inputImg))
    .resize(width, height)
    .toFile(path.join(RESIZED_IMAGES_DIR, resizedFileName), function (err) {
      console.error(err);
    });
};

export { parseQueryToFilename, resizeAndWrite, RESIZED_IMAGES_DIR };
