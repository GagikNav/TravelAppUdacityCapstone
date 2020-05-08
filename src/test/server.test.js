const app = require('../server/server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('post the test endpoint', async (done) => {
   const response = await request.post('/mypostroute');

   expect(response.status).toBe(200);
   expect(response.body.message).toBe('pass!');
   done();
});
