import { toPng, toJpeg, toWebP, toTiff } from './formatConversions';

const reformat = async function (
  filepath: string,
  format: string
): Promise<string | undefined> {
  switch (format) {
    case 'png':
      return toPng(filepath);
    case 'jpeg':
      return toJpeg(filepath);
    case 'webp':
      return toWebP(filepath);
    case 'tiff':
      return toTiff(filepath);
  }
};

export default reformat;
