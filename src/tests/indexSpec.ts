import app from '../server/index';
import request from 'supertest';
import { cache } from '../server/utils/cache';
import { PROCESSED_IMAGES_DIR } from '../server/utils/dirPaths';
import path from 'path';

describe('Test endpoint respsonses', () => {
  it('should return correct (jpeg) image type and response code when resizing', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&width=700&height=500')
      .expect('Content-Type', /image\/jpeg/)
      .expect(200, done);
  });

  it('should return correct (png) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&format=png')
      .expect('Content-Type', /image\/png/)
      .expect(200, done);
  });

  it('should return correct (webp) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&format=webp')
      .expect('Content-Type', /image\/webp/)
      .expect(200, done);
  });

  it('should return correct (jpeg) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&format=jpeg')
      .expect('Content-Type', /image\/jpeg/)
      .expect(200, done);
  });
  it('should return correct (tiff) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&format=tiff')
      .expect('Content-Type', /image\/tiff/)
      .expect(200, done);
  });

  it('Cache should now contain references to processed image files', () => {
    expect(cache[path.join(PROCESSED_IMAGES_DIR, 'fjord-700x500.jpg')]).toBe(
      true
    );
    expect(cache[path.join(PROCESSED_IMAGES_DIR, 'fjord.png')]).toBe(true);
    expect(cache[path.join(PROCESSED_IMAGES_DIR, 'fjord.webp')]).toBe(true);
    expect(cache[path.join(PROCESSED_IMAGES_DIR, 'fjord.jpeg')]).toBe(true);
    expect(cache[path.join(PROCESSED_IMAGES_DIR, 'fjord.tiff')]).toBe(true);
  });
});
