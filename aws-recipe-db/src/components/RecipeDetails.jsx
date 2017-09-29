import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageNotFound from './PageNotFound';

const RecipeDetails = ({ recipes, match }) => {
  const recipe = recipes.filter(recipe => recipe.id === match.params.id)[0];

  return (
    !recipe ?
      <PageNotFound />
      :
      <div>
        <h2>{recipe.name}</h2>

        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>

        <h3>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>
  );
};

RecipeDetails.propTypes = {
  recipes: PropTypes.array
};

RecipeDetails.defaultProps = {
  recipes: []
};

export default connect(
  state => ({
    recipes: state.recipes.recipes
  })
)(RecipeDetails);
