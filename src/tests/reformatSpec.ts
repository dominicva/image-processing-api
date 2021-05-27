import path from 'path';
import reformat from '../server/utils/reformat';
import {
  ORIGINAL_IMAGES_DIR,
  PROCESSED_IMAGES_DIR,
} from '../server/utils/dirPaths';

const mocks = {
  filepath: path.join(ORIGINAL_IMAGES_DIR, 'palmtunnel.jpg'),
  formats: ['png', 'jpeg', 'webp', 'tiff'],
};

describe('Test reformatting functionality', () => {
  mocks.formats.forEach((format: string) => {
    it(`expect reformat(mocks.filepath, ${format}) to return filepath with correct extension`, async () => {
      const expectedResult = path.join(
        PROCESSED_IMAGES_DIR,
        `palmtunnel.${format}`
      );
      const actualResult = await reformat(mocks.filepath, format);

      expect(expectedResult).toEqual(String(actualResult));
    });
  });
});
