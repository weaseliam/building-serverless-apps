import AWS from 'aws-sdk';
import { REGION } from './config';

AWS.config.update({ region: REGION });

export const call = (action, params) => {
  const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

  return dynamoDbClient[action](params).promise();
};
