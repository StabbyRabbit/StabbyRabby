const { idleTimeoutMillis } = require('pg/lib/defaults');
const request = require('supertest');
// const testJsonFile = path.resolve(__dirname, './testDatabase.json');

const server = 'http://localhost:3000'

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
})

describe('Create Home Route integration', () => {
    //
    // afterAll(() => {
    //     return request(server).put('/').send([]).expect([]);
    // });
    describe('/home', () => {
        describe('/', () => {
            describe('DELETE', () => {
                it('responds with 200 status and application/json content type', (done) => {
                    request(server)
                        .delete('/')
                        .expect('Content-Type', /application\/json/)
                        .expect(200, done);
                });
                // it('responds with deleted item', async () => {
                //     const data = [{id: 5, title: 'place',   }]
                // })
                xit('responds to invalid request with 400 status and error message in body', async () => {
                    const res = await request(server)
                    .delete('/')
                    
                })
            })
        })
    })
});
   