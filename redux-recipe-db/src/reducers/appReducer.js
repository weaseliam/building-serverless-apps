import { resolveEach } from 'redux-resolver';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  recipes: [],
  showEdit: false,
  recipeToShow: null,
  query: null
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

let recipes = resolveEach(INITIAL_STATE, {
  [actionTypes.CREATE_RECIPE]: handleCreateRecipe,
  [actionTypes.SEARCH_RECIPE]: handleSearchRecipe
});

export default combineReducers({
  recipes,
  routing
});
