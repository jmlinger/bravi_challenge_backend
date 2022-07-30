const express = require('express');

const root = express.Router({ mergeParams: true });
const customersRouter = require('./customers/router');

root.use('/customers', customersRouter);

module.exports = root;
