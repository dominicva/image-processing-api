const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
import { PROCESSED_IMAGES_DIR } from './resizeAndWrite';

const parsePath = {
  name(filepath: string) {
    // const name = path.match(/\/(.+)\./);
    // if (name) return name[1];
    const segments = filepath.split('/');
    const pre = segments[segments.length - 1];
    return pre.split('.')[0];
  },
  extension(path: string) {
    const segments = path.split('.');
    return segments[segments.length - 1];
  },
};

const toPng = async function (filepath: string) {
  const image = parsePath.name(path);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.png`);

  await sharp(filepath).png().toFile(output);

  return output;
};

const toJpeg = async function (filepath: string) {
  const image = parsePath.name(path);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.jpeg`);

  await sharp(filepath).jpeg().toFile(output);

  return output;
};

const toWebP = async function (filepath: string) {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.webp`);

  await sharp(filepath).webp().toFile(output);

  return output;
};

const toTiff = async function (filepath: string) {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.tiff`);

  await sharp(filepath).tiff().toFile(output);

  return output;
};

const reformat = async function (
  path: string,
  format: string
): Promise<string | undefined> {
  switch (format) {
    case 'png':
      return toPng(path);
    case 'jpeg':
      return toJpeg(path);
    case 'webp':
      return toWebP(path);
    case 'tiff':
      return toTiff(path);
  }
};

const getMetaData = async function (path: string) {
  const metadata = await sharp(path).metadata();
  console.log('metadata', metadata);
};

const greyscale = async function (path: string) {
  const image = parsePath.name(path);

  // Applies a grayscale effect to the image
  await sharp(path)
    .grayscale()
    .png()
    .toFile(`./processed/${image}-grayscale.png`);
};

const resize = async function (path: string, width: number, height: number) {
  const name = parsePath.name(path);
  const ext = parsePath.extension(path);
  const output = `processed/${name}-${width}x${height}.${ext}`;

  //  Resizes the image
  await sharp(path).resize(width, height).png().toFile(output);

  return output;
};

const blur = async function (path: string, blurFactor: number) {
  const name = parsePath.name(path);
  // Blur the image. When used without parameters, performs a fast, mild blur of the output image. When a sigma is provided, performs a slower, more accurate Gaussian blur.
  // Value between 0.3 and 1000
  await sharp(path).blur(blurFactor).png().toFile(`processed/${name}-blur.png`);
};

export default {
  // toPng,
  // toJpeg,
  // toWebP,
  // toTiff,
  reformat,
  getMetaData,
  greyscale,
  resize,
  blur,
};
