'use strict';
const app = require('express')();

const controller = require('../controllers/books.controller');

app.route('/books').get(controller.fetchData);

module.exports = app;