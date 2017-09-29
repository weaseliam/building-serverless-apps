import { CognitoUserPool } from 'amazon-cognito-identity-js';

import config from './config';

const userPool = new CognitoUserPool({
  UserPoolId: config.cognito.USER_POOL_ID,
  ClientId: config.cognito.APP_CLIENT_ID
});

export const signup = (email, password) => new Promise(
  (resolve, reject) => {
    userPool.signUp(email, password, [{ Name: 'email', Value: email }], null,
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result.user);
      });
  }
);
