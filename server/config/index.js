const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const env = process.env;
module.exports = {
  NODE_ENV: env.NODE_ENV,
  IS_PROD: ['production'].includes(env.NODE_ENV),
  PORT: env.PORT,
  MYSQL_USERNAME: env.MYSQL_USERNAME,
  MYSQL_PASSWORD: env.MYSQL_PASSWORD,
  MYSQL_DATABASE: env.MYSQL_DATABASE,
  MYSQL_HOST: env.MYSQL_HOST,
  ADMIN_SUPPORT_EMAIL: env.ADMIN_SUPPORT_EMAIL
}
