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

const resizeAndWrite = function (
  inputImg: string,
  width: number,
  height: number
): string {
  let resizedFileName = `${inputImg}-${width}x${height}.jpg`;

  sharp(path.join(ORIGINAL_IMAGES_DIR, inputImg))
    .resize(width, height)
    .toFile(path.join(RESIZED_IMAGES_DIR, resizedFileName), function (err) {
      console.error(err);
    });

  return resizedFileName;
};

export { resizeAndWrite, RESIZED_IMAGES_DIR };
