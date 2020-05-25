const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const env = process.env;
module.exports = {
  NODE_ENV: env.NODE_ENV,
  IS_PROD: ['production'].includes(env.NODE_ENV),
  REACT_APP_PORT: env.REACT_APP_PORT,
  REACT_APP_API_SERVER: env.REACT_APP_API_SERVER
}
