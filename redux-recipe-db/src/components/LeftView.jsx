import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RecipeButton from './RecipeButton';
import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';
import * as actions from '../actions/appActions';

const LeftView = ({ recipes, query, searchRecipe }) => {
  let filteredRecipes = query ?
    recipes.filter((recipe) =>
      query && recipe.name.toLowerCase().indexOf(query.toLowerCase()) > -1) :
    recipes;

  return (
    <div>
      <RecipeButton link="/edit" />
      <RecipeFilter onSearch={searchRecipe} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

LeftView.propTypes = {
  recipes: PropTypes.array,
  query: PropTypes.string,
  selectRecipe: PropTypes.func,
  searchRecipe: PropTypes.func
};

LeftView.defaultProps = {
  recipes: [],
  query: '',
  selectRecipe: () => { },
  searchRecipe: () => { }
};

export default connect(
  state => ({
    recipes: state.recipes.recipes,
    query: state.recipes.query
  }),
  actions
)(LeftView);
