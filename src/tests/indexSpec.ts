import { square, delayHi } from '../tests/helpers/dummies';

it('expect square(5) to equal 25', () => {
  expect(square(5)).toEqual(25);
});

it("expect delayHi() to equal 'hi'", async () => {
  const result = await delayHi();
  expect(result).toEqual('hi');
});
