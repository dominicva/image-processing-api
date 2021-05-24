import { square, delayHi } from '../server/index';

it('expect square(5) to equal 25', () => {
  expect(square(5)).toEqual(25);
});

it("expect delayHi() to equal 'hi'", async () => {
  const result = await delayHi();
  expect(result).toEqual('hi');
});
