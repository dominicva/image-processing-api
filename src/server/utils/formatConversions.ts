import sharp from 'sharp';
import path from 'path';
import { PROCESSED_IMAGES_DIR } from '../utils/dirPaths';
import parsePath from './pathParser';
import { inCache, storeInCache } from './cache';

function toFormat(format: string) {
  return async function formatter(filepath: string): Promise<string> {
    const image = parsePath.name(filepath);
    const output = path.join(PROCESSED_IMAGES_DIR, `${image}.${format}`);

    if (!inCache(output)) {
      switch (format) {
        case 'png':
          await sharp(filepath).png().toFile(output);
          break;
        case 'jpeg':
          await sharp(filepath).jpeg().toFile(output);
          break;
        case 'webp':
          await sharp(filepath).webp().toFile(output);
          break;
        case 'tiff':
          await sharp(filepath).tiff().toFile(output);
      }
      storeInCache(output);
    }

    return output;
  };
}

const toPng = toFormat('png');
const toJpeg = toFormat('jpeg');
const toWebP = toFormat('webp');
const toTiff = toFormat('tiff');

export { toPng, toJpeg, toWebP, toTiff };
