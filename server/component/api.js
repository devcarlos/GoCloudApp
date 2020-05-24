const express = require('express');
const api = require('../routes/api');
const LandingRoutes = require('../routes/landing');

const app = express.Router();

//++++++++++++++++++++++++++++
//++ UNAUTHENTICATED ROUTES ++
//++++++++++++++++++++++++++++

// setup API routes
app.use('/', api);

// setup LANDING routes
app.use('/landing', LandingRoutes);

module.exports = app;
