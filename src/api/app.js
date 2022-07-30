const express = require('express');
const cors = require('cors');

const app = express();
const root = require('../controllers/root');
const { errorHandler } = require('../middlewares');

app.use(cors());

app.use(express.json());

app.use(root);

app.use(errorHandler);

module.exports = app;
