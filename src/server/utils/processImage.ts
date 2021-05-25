import { parse } from 'path';

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const parsePath = {
  name(path: string) {
    const name = path.match(/\/(.+)\./);
    if (name) return name[1];
  },
  extension(path: string) {
    const segments = path.split('.');
    return segments[segments.length - 1];
  },
};

const toPng = async function (path: string) {
  const image = parsePath.name(path);
  const info = await sharp(path).png().toFile(`./processed/${image}.png`);
  console.log('info', info);
};

const toJpeg = async function (path: string) {
  const image = parsePath.name(path);
  const info = await sharp(path).jpeg().toFile(`./processed/${image}.jpeg`);
  console.log('info', info);
};

const toWebP = async function (path: string) {
  const image = parsePath.name(path);
  const info = await sharp(path).webp().toFile(`./processed/${image}.webp`);
  console.log('info', info);
};

const toTiff = async function (path: string) {
  const image = parsePath.name(path);
  const info = await sharp(path).tiff().toFile(`./processed/${image}.tiff`);
  console.log('info', info);
};

const getMetaData = async function (path: string) {
  const metadata = await sharp(path).metadata();
  console.log('metadata', metadata);
};

const greyscale = async function (path: string) {
  const image = parsePath.name(path);

  // Applies a grayscale effect to the image
  await sharp(path)
    .grayscale()
    .png()
    .toFile(`./processed/${image}-grayscale.png`);
};

const resize = async function (path: string, width: number, height: number) {
  const name = parsePath.name(path);
  const ext = parsePath.extension(path);
  const output = `processed/${name}-${width}x${height}.${ext}`;

  //  Resizes the image
  await sharp(path).resize(width, height).png().toFile(output);
};

const blur = async function (path: string, blurFactor: number) {
  const name = parsePath.name(path);
  // Blur the image. When used without parameters, performs a fast, mild blur of the output image. When a sigma is provided, performs a slower, more accurate Gaussian blur.
  // Value between 0.3 and 1000
  await sharp(path).blur(blurFactor).png().toFile(`processed/${name}-blur.png`);
};

export default {
  toPng,
  toJpeg,
  toWebP,
  toTiff,
  getMetaData,
  greyscale,
  resize,
  blur,
};
