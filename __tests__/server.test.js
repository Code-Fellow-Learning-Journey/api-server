'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models/index.js');
const request = supertest(app);

beforeAll(async () =>{
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  test('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('creates a customer',async()=>{
    let response = await (await request.post('/customer')).setEncoding({
      name: 'tester',
      age: 25,
      pronouns: 'he/him',
    });


    // response is the same as adding a new customer and a the RESPONSE is the layout of the new cust
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(25);
    expect(response.body.pronouns).toEqual('he/him');
  });



  test('finds all customers', async ()=>{
    let response = await request.get('/customer');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tester');
    expect(response.body[0].age).toEqual(25);
    expect(response.body[0].pronouns).toEqual('he/him');
  });

  test('finds a single customer', async () => {
    let response = await request.get('/customer');
  });

});
