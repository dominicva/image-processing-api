import express from 'express';
import sharp from 'sharp';

const app = express();
const PORT = 3000;

async function semiTransparentRedPng() {
  return await sharp({
    create: {
      width: 48,
      height: 48,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .png()
    .toBuffer();
}

app.get('/api/:image', async (req: express.Request, res: express.Response) => {
  const { image } = req.params;
  console.log(image);
  const result = await semiTransparentRedPng();
  res.send(result);
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
