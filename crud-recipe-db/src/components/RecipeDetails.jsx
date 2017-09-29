import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe }) => (
  !recipe ?
    <h3>Please select a recipe !</h3>
    :
    <div>
      <h2>{recipe.name}</h2>

      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
);

RecipeDetails.propTypes = {
  recipe: PropTypes.object
};

RecipeDetails.defaultProps = {
};

export default RecipeDetails;
