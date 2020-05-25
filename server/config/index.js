const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const env = process.env;
module.exports = {
  NODE_ENV: env.NODE_ENV,
  IS_PROD: ['production'].includes(env.NODE_ENV),
  PORT: env.PORT,
  AWS_ACCESS_KEY: env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: env.AWS_SECRET_KEY,
  AWS_REGION: env.AWS_REGION,
  AWS_DYNAMODB_TABLE_NAME: env.AWS_DYNAMODB_TABLE_NAME,
  AWS_DYNAMODB_ENDPOINT: env.AWS_DYNAMODB_ENDPOINT,
  ADMIN_SUPPORT_EMAIL: env.ADMIN_SUPPORT_EMAIL
}
