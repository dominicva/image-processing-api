import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/:image', (req: express.Request, res: express.Response) => {
  const { image } = req.params;
  console.log(image);
  res.send('Hello Word');
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
