import app from '../server/index';
import request from 'supertest';

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
});
