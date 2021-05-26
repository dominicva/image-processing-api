import parsePath from '../server/utils/pathParser';

const mockPath =
  '/fullstack-javascript-ND/image-processing-api/images/originals/encenada-port.jpeg';

it("expect parsePath.name(mockPath) to equal 'encenada-port'", () => {
  expect(parsePath.name(mockPath)).toEqual('encenada-port');
});

it("expect parsePath.extension(mockPath) to equal 'jpeg'", async () => {
  expect(parsePath.extension(mockPath)).toEqual('jpeg');
});
