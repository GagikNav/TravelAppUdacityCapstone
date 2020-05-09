const app = require('../server/server'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

it('post the test endpoint', async () => {
   const response = await request.post('/mypostroute').send({
      city: 'LONDON',
      startDate: '2020-05-13',
      endDate: '2020-05-28',
      tripDays: 15,
      untilDepDayInDays: 4,
      untilDepDayInHour: 96,
      wurl: 'current',
   });
   expect(response.status).toBe(500);
});

it('post the test endpoint', async () => {
   const response = await request.get('/test');
   expect(response.status).toBe(200);
   expect(response.body.value).toBe('hello!');
});
