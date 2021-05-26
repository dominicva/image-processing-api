import sharp from 'sharp';
import path from 'path';
import { PROCESSED_IMAGES_DIR } from '../utils/dirPaths';
import parsePath from './pathParser';
import { cache, inCache, storeInCache } from './cache';

// const PROCESSED_IMAGES_DIR = path.join(
//   __dirname,
//   '../',
//   '../',
//   '../',
//   'images',
//   'processed'
// );

const toPng = async function (filepath: string): Promise<string> {
  console.log('CACHE BEFORE:', cache);
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.png`);

  if (!inCache(output)) {
    await sharp(filepath).png().toFile(output);
    storeInCache(output);
    console.log('CACHE AFTER:', cache);
  }

  return output;
};

const toJpeg = async function (filepath: string): Promise<string> {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.jpeg`);

  if (!inCache(output)) {
    await sharp(filepath).jpeg().toFile(output);
    storeInCache(output);
  }

  return output;
};

const toWebP = async function (filepath: string): Promise<string> {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.webp`);

  if (!inCache(output)) {
    await sharp(filepath).webp().toFile(output);
    storeInCache(output);
  }

  return output;
};

const toTiff = async function (filepath: string): Promise<string> {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.tiff`);

  if (!inCache(output)) {
    await sharp(filepath).tiff().toFile(output);
    storeInCache(output);
  }

  return output;
};

export { toPng, toJpeg, toWebP, toTiff };
