import path from 'path';

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

const CLIENT = path.join(__dirname, '../', '../', '../', 'src', 'client');

export { ORIGINAL_IMAGES_DIR, PROCESSED_IMAGES_DIR, CLIENT };
