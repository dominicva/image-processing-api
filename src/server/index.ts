const square = function (num: number): number {
  return num ** 2;
};

const delayHi = async function (): Promise<string> {
  return await 'hi';
};

export { square, delayHi };
