import fs from 'fs';
import path from 'path';
import express from 'express';
import sharp from 'sharp';

const app = express();
const PORT = 3000;

async function semiTransparentRedPng() {
  sharp(path.join(__dirname, '../', '../', 'images', 'originals', 'fjord.jpg'))
    .resize(300, 200)
    .toFile('output.jpg', function (err) {
      // output.jpg is a 300 pixels wide and 200 pixels high image
      // containing a scaled and cropped version of input.jpg
    });
  // return await sharp({
  //   create: {
  //     width: 48,
  //     height: 48,
  //     channels: 4,
  //     background: { r: 255, g: 0, b: 0, alpha: 0.5 },
  //   },
  // })
  //   .png()
  //   .toBuffer();
}

// async function writeImageToFs() {
//   const image = await semiTransparentRedPng();
//   const imgPath = path.join(__dirname, '../', '../', 'images', 'resized');
//   fs.writeFileSync(imgPath, image);
// }

app.get('/api', async (req: express.Request, res: express.Response) => {
  await semiTransparentRedPng();

  res.send('hello worl');
});

app.listen(PORT, () =>
  console.log(`Image Processing API listening on port ${PORT}`)
);
