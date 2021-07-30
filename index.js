const express = require('express');
const config = require('./config');
const server_middleware = require('./middleware/server_middleware');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

const server = require('http').createServer(app).listen(config.app.port, () => {
    console.log(`Server listening on port ${config.app.port}`);
});

const mainRoutes = require('./app/main_routes');
app.use('/api', server_middleware.corsOptionsDelegate, mainRoutes);

module.exports = app;