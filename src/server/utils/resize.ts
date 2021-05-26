import path from 'path';
import sharp from 'sharp';
import parsePath from './pathParser';
import { PROCESSED_IMAGES_DIR } from './dirPaths';

const resize = async function (
  filepath: string,
  width: number,
  height: number
): Promise<string> {
  const name = parsePath.name(filepath);
  const ext = parsePath.extension(filepath);
  const output = path.join(
    PROCESSED_IMAGES_DIR,
    `${name}-${width}x${height}.${ext}`
  );

  if (!inCache(output)) {
    //  Resizes the image
    await sharp(filepath).resize(width, height).png().toFile(output);
    storeInCache(output);
  }

  return output;
};

export default resize;
