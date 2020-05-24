const express = require('express');
const ip = require('ip');
const config = require('./config');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

const app = express();
const http = require('http').createServer(app);

app.config = config;
const serverIP = config.IS_PROD ? ip.address() : 'localhost';
console.log('SERVER : ', serverIP);
console.log('PORT : ', config.PORT);

//startup services
require('./startup/express')(app);
require('./startup/routes')(app);

//swagger
swaggerDocument.host = `${serverIP}:${config.PORT}`;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

http.listen(config.PORT, serverIP, () => {
  console.log(`KeepClose listening on ${serverIP}:${config.PORT}`);
});
