'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFound = require('./error-handler/404');
const errorHandler = require('./error-handler/500');
const PORT = process.env.PORT || 3002;
const customerRouter = require('./routes/customers')



const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res , next) => {
  res.status(200).send('Hello World');
});

app.get('/customer', async () => {
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).(customers);
  } catch (e){
    next(e);
  }
});

app.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await CustomerModel.create(req.body);
    res.status(200).send(customers);
  } catch (e) {
    next(e);
  }
});

function start(){
  app.listen(Port, () => console.log('listening on port', PORT));
}


Model.exports = { app, start };
