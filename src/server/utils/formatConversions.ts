import sharp from 'sharp';
import path from 'path';
import { PROCESSED_IMAGES_DIR } from '../utils/dirPaths';
import parsePath from './pathParser';
import { inCache, storeInCache } from './cache';

const toPng = async function (filepath: string): Promise<string> {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}.png`);

  if (!inCache(output)) {
    await sharp(filepath).png().toFile(output);
    storeInCache(output);
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
