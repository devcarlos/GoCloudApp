const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs')
const morgan = require('morgan')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs', 'access.log'), { flags: 'a' })

module.exports = (app) => {
  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }))

  //setup use middleware
  app.use(cors('*'))
  app.use(helmet());

  //setup bodyparser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  //setup headers and next handler
  app.use(function (req, res, next) {
    console.log('BODY: ', req.body);
    console.log('METHOD: ', req.method);
    console.log('URL: ', req.originalUrl);
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
  })
}
