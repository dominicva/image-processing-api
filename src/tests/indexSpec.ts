import app from '../server/index';
import request from 'supertest';

describe('Test endpoint respsonses', () => {
  it('should return correct (jpeg) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&width=700&height=500')
      .expect('Content-Type', /image\/jpeg/)
      .expect('Content-Length', '765854')
      .expect(200, done);
  });

  it('should return correct (webp) image type and response code', (done) => {
    request(app)
      .get('/api/images?filename=fjord.jpg&format=webp')
      .expect('Content-Type', /image\/webp/)
      .expect('Content-Length', '368908')
      .expect(200, done);
  });
});
