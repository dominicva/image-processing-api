import path from 'path';
import sharp from 'sharp';
import parsePath from './pathParser';
import { PROCESSED_IMAGES_DIR } from './dirPaths';

const grayscale = async function (filepath: string): Promise<string> {
  const image = parsePath.name(filepath);
  const output = path.join(PROCESSED_IMAGES_DIR, `${image}-grayscale.png`);

  if (!inCache(output)) {
    // Applies a grayscale effect to the image
    await sharp(filepath).grayscale().png().toFile(output);
    storeInCache(output);
  }

  return output;
};

const blur = async function (
  filepath: string,
  blurFactor: number
): Promise<string> {
  const name = parsePath.name(filepath);
  const output = path.join(
    PROCESSED_IMAGES_DIR,
    `${name}-blur-${blurFactor}.png`
  );

  if (!inCache(output)) {
    // Blur value between 0.3 and 1000
    await sharp(filepath).blur(blurFactor).png().toFile(output);
    storeInCache(output);
  }

  return output;
};

export { grayscale, blur };
