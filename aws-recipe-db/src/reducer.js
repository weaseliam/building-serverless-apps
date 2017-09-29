import { resolveEach } from 'redux-resolver';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form'

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  recipes: [],
  showEdit: false,
  recipeToShow: null,
  query: null,
  user: null
};

const handleCreateRecipe = (state, action) => {
  let recipes = Object.assign([], state.recipes);
  recipes.push(action.payload);

  return {
    ...state,
    recipes,
    recipeToShow: action.payload,
    showEdit: false
  };
};

const handleSearchRecipe = (state, action) => {
  return {
    ...state,
    query: action.payload
  };
};

const handleLogin = (state, action) => {
  return {
    ...state,
    user: action.payload
  };
};

const handleSignup = (state, action) => {
  return {
    ...state
  };
};

let recipes = resolveEach(INITIAL_STATE, {
  [actionTypes.CREATE_RECIPE]: handleCreateRecipe,
  [actionTypes.SEARCH_RECIPE]: handleSearchRecipe,
  [actionTypes.LOGIN]: handleLogin,
  [actionTypes.SIGNUP]: handleSignup
});

export default combineReducers({
  recipes,
  routing,
  form
});
