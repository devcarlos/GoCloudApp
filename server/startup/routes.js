const api = require('../component/api');
const ResponseHandler = require('../component/response-handler');
const expressValidator = require('express-validator');

module.exports = app => {
  global.refreshTokens = {};

  app.use(ResponseHandler);

  //mount routes at /api
  app.use('/api', api);

  //setup validator
  app.use(expressValidator());

  app.use((err, req, res, next) => {
    // express-jwt error handler
    if (err.name === 'UnauthorizedError') {
      return res.ErrorHandler(err);
    }
    // global error handler for joi.
    if (err && err.error && err.error.isJoi) {
      return res.ErrorHandler(`type: ${err.type}, message: ${err.error.toString()}`);
    }
    next(err);
  });
};
