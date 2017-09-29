import uuid from 'uuid';

import { TABLE } from './lib/config';
import { success, failure } from './lib/response';
import * as DynamoDB from './lib/DynamoDB';

export const main = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: TABLE,
    Item: {
      userId: data.userId,
      recipeId: uuid.v1(),
      name: data.recipe.name,
      instructions: data.recipe.instructions,
      ingredients: data.recipe.ingredients,
      createdAt: new Date().getTime()
    }
  };

  try {
    await DynamoDB.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
