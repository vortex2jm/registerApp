const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');

// List route
routes.get('/ongs', ongController.index);
// Create route
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);

routes.get('/incidents', incidentController.index);

module.exports = routes;