const express = require('express');
const app = express.Router();

app.use(function (req, res, next) { 

  res.SuccessHandler = value => {
    const response = { status: 'success' };
    if (typeof value === 'string') {
      response.message = value;
    } else {
      response.value = value;
    }
    return res.json(response);
  };

  res.ErrorHandler = (err, statusCode = 500) => {
    const message = typeof err === 'string' ? err : err.message;
    return res.status(statusCode).json({
      status: 'error',
      message,
    });
  };
  next();
});

module.exports = app;
