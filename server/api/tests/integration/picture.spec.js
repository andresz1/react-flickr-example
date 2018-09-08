const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');

const app = require('../../../index');

describe('Pictures API', () => {
  describe('GET /v1/pictures', () => {
    it('should get all pictures', (done) => {
      request(app)
        .get('/api/v1/pictures')
        .expect(httpStatus.OK)
        .then(({ body }) => {
          expect(body.photo).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all pictures with pagination', (done) => {
      const page = 2;
      const limit = 50;

      request(app)
        .get('/api/v1/pictures')
        .query({ page, limit })
        .expect(httpStatus.OK)
        .then(({ body }) => {
          expect(body.page).to.be.equal(page);
          expect(body.perpage).to.be.equal(limit);
          done();
        })
        .catch(done);
    });

    it('should report error when parameters are not valid', (done) => {
      const page = -1;
      const limit = 150;

      request(app)
        .get('/api/v1/pictures')
        .query({ page, limit })
        .expect(httpStatus.BAD_REQUEST)
        .then(({ body }) => {
          expect(body.errors).to.be.an('array');
          expect(body.errors.length).to.be.equal(2);

          done();
        })
        .catch(done);
    });
  });
});
