'use strict';

const express = require('express');
const { CustomerModel } = require('../models');
const { CustomerInterface } = require('../models');


const router = express.Router();

router.get('/customer', async (req, res, next) => {
  // const users = await User.findAll();
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).send(customers);
  } catch (e) {
    next(e);
  }
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await CustomerInterface.read(req.body);
    res.status(200).send(newCustomer);
  } catch (e) {
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  try {
    const result = await CustomerInterface.update(req.body, req.params.id);
    res.status(200).send(updatedCustomer);
  } catch (e) {
    next(e);
  }
});

router.delete('/customer/:id', async (req, res, next) => {
  try {
    let id = parseInt(req.params.id);
    const deleteCustomer = await this.CustomerModel.destroy({ where: { id } });
    res.status(200).send();

  } catch (e) {
    next(e);
  }
});

module.exports = router;
