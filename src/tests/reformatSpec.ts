import reformat from '../server/utils/reformat';

const mocks = {
  filepath:
    '/Users/dominicvanalmsick/Downloads/code/udacity/fullstack-javascript-ND/image-processing-api/images/originals/palmtunnel.jpg',
  formats: ['png', 'jpeg', 'webp', 'tiff'],
};

describe('Test reformatting functionality', () => {
  mocks.formats.forEach((format: string) => {
    it(`expect reformat(mocks.filepath, ${format}) to return filepath with correct extension`, async () => {
      const expectedResult = `/Users/dominicvanalmsick/Downloads/code/udacity/fullstack-javascript-ND/image-processing-api/images/processed/palmtunnel.${format}`;
      const actualResult = await reformat(mocks.filepath, format);

      expect(expectedResult).toEqual(String(actualResult));
    });
  });
});
