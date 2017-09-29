import * as actionTypes from './actionTypes';
import * as api from './api';

export const createRecipe = (recipe) => ({
  type: actionTypes.CREATE_RECIPE,
  payload: recipe
});

export const searchRecipe = (query) => ({
  type: actionTypes.SEARCH_RECIPE,
  payload: query
});

export const login = (user) => ({
  type: actionTypes.LOGIN,
  payload: user
});

export const signup = (user) => {
  return dispatch => {
    api.signup(user.email, user.password)
      .then(() => dispatch({
        type: actionTypes.SIGNUP,
        payload: user
      }))
      .catch(error => console.error(error));
  };
};
