const config = require('../config');
const AWS = require('aws-sdk');

const aws_table_name = config.AWS_DYNAMODB_TABLE_NAME;
const aws_config = {
    region: config.AWS_REGION,
    endpoint: config.AWS_DYNAMODB_ENDPOINT
}

console.log('AWS CONFIG => ', aws_config);

AWS.config.update(aws_config);

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = {
    aws_table_name: aws_table_name,
    aws_config: aws_table_name,
    dynamoDB: dynamoDB
}