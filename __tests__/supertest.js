//const { idleTimeoutMillis } = require('pg/lib/defaults');
const request = require('supertest');

const server = 'http://localhost:3000'

describe('Create Home Route integration', () => {
    afterEach(() => {
        return request(server).put('/').send({}).expect({});
    });

    describe('/', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content type', () => request(server)
            .get('/')
            .expect('Content-Type' , /text\/html/)
            .expect(200));
        });
    });

    describe('/home', () => {
        // describe('/', () => {
            describe('GET', () => {
                it('responds with 200 status and text/html content type', async () => request(server)
                .get('/home')
                .expect('Content-Type', /text\/html/)
                .expect(200));
            });
            xdescribe('DELETE', () => {
                xit('responds with 200 status and application/json content type', (done) => {
                    request(server)
                        .delete('/home')
                        .send({})
                        .expect('Content-Type', /application\/json/)
                        .expect(200, done);
                });
                xit('responds with deleted item', async () => {
                    const data = [{id: 5, title: 'place',   }]
                })
                it('responds to invalid request with 400 status and error message in body', async () => {
                    const res = await request(server)
                    .delete('/')
                    .send({})
                    .expect(400);
                  expect(res.body).toEqual('Error deleting event');
                })
            })
        })
    describe('/createEvent', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content type', () => request(server)
            .get('/')
            .expect('Content-Type' , /application\/json/)
            .expect(400));
        });
        describe('POST', () => {
            it('responds to invalid request with 400 status and error message in body', async () => {
                const res = await request(server)
                .post('/createEvent')
                .send({})
                .expect(400);
              expect(res.body).toEqual('Error deleting event');
            })
        })
    });

    describe('/profile', () => {
        describe('GET', () => {
            it('responds with 200 status and text/html content type', () => request(server)
            .get('/')
            .expect('Content-Type' , /text\/html/)
            .expect(200));
        });
        describe('POST', () => {
            it('responds to invalid request with 400 status and error message in body', async () => {
                const res = await request(server)
                .post('/profile')
                .send({})
                .expect(400);
              expect(res.body).toEqual('Error deleting event');
            })
        })
        describe('DELETE', () => {
            it('responds to invalid request with 400 status and error message in body', async () => {
                const res = await request(server)
                .delete('/profile')
                .send({})
                .expect(400);
              expect(res.body).toEqual('Error deleting event');
            })
        })
    });
});
   