import * as actionTypes from './actionTypes';

export const createRecipe = (recipe) => ({
  type: actionTypes.CREATE_RECIPE,
  payload: recipe
});

export const searchRecipe = (query) => ({
  type: actionTypes.SEARCH_RECIPE,
  payload: query
});
