'use strict';
const app = require('express')();
const books_routes = require('./routes/books_routes');

app.use('/books_routes', books_routes);

module.exports = app;