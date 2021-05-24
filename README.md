# Image Processing API

## Big picture

- API that allows the user to resize and scale images
- Images in the 'originals' directory can be resized by entering
  a url of the form: `http://localhost:3000/api/images?filename=:filename&width:width&height:height`
- The resized image is written to the 'resized' directory and sent to the client in the http response

## Tools and technologies used

- TypeScript
- Node with Express
- Sharp npm package for image resizing
- Jasmine and Supertest
- ESLint + Prettier

## Run on your locale machine

- Get the code
- Run `npm install`
- In separate terminal windows run `npm run build` and `npm test`. Together these will transpile the TypseScript in watch mode, run tests and get the local host server ready at port 3000.
