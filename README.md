# Image Processing API

## Big picture

- API that allows the user to apply various transformations to image files.
- Images in the 'images/originals/' directory can be processed, with processed images written to the 'images/processed/' directory.

## Available image transformations

'fjord.jpg' used as example

- Resize

  - Resize an image by providing its filename and the resized dimensions (pixel values) in the following pattern (500x300 as example):
    http://localhost:3000/api/images?filename=fjord.jpg&width=500&height=300

- Reformat
  - Convert an image to a different format by providing its filename and the target format. Available options are **png**, **jpeg**, **webp**, and **tiff**. Make sure the URL matches the following pattern:
    http://localhost:3000/api/images?filename=fjord.jpg&format=OPTION
- Apply grayscale

  - Make sure the URL matches the following pattern: http://localhost:3000/api/images?filename=fjord.jpg&toGrayscale=true

- Apply blur
  - The blur parameter ('blurFactor') can accept values between 0.3 and 1000. However, the image is already quite obscured by around 10. Make sure the URL matches the following pattern.
    http://localhost:3000/api/images?filename=fjord.jpg&blurFactor=VALUE

## Tools and technologies used

- TypeScript
- Node with Express
- Sharp npm package for image processing
- Jasmine and Supertest
- ESLint + Prettier

## Run on your locale machine

- Get the code
- Run `npm install`
- In separate terminal windows run `npm run build` and `npm start`. These will transpile the TypseScript (in watch mode) and get the local host server ready at port 3000.
