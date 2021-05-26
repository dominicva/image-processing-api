import sharp from 'sharp';

const getMetaData = async function (path: string) {
  const metadata = await sharp(path).metadata();
  console.log('metadata', metadata);
};

export default getMetaData;
