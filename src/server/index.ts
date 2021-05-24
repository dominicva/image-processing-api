import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(`Image Processing API server listening on port ${PORT}`)
);

const square = function (num: number): number {
  return num ** 2;
};

const delayHi = async function (): Promise<string> {
  return await 'hi';
};

export { square, delayHi };
