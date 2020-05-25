const config = require('../config');
const AWS = require('aws-sdk');

const aws_table_name = config.AWS_DYNAMODB_TABLE_NAME;
let aws_config = {
    region: config.AWS_REGION,
    endpoint: config.AWS_DYNAMODB_ENDPOINT
}

if (config.IS_PROD) {
    //update remote settings
    aws_config = {
        accessKeyId: config.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS_SECRET_KEY,
        region: config.AWS_REGION
    }
}

console.log('AWS CONFIG => ', aws_config);

AWS.config.update(aws_config);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = {
    aws_table_name: aws_table_name,
    aws_config: aws_table_name,
    dynamoDB: dynamoDB
}