import React from 'react';
import PropTypes from 'prop-types';

import RecipeEdit from './RecipeEdit';
import RecipeDetails from './RecipeDetails';

const RightView = ({ onSubmitRecipe, showEdit, recipe }) => (
  <div>
    {showEdit ?
      <RecipeEdit onSubmit={onSubmitRecipe} />
      :
      <RecipeDetails recipe={recipe} />}
  </div>
);

RightView.propTypes = {
  onSubmitRecipe: PropTypes.func,
  showEdit: PropTypes.bool,
  recipe: PropTypes.object
};

RightView.defaultProps = {
  onSubmitRecipe: () => { },
  showEdit: false
};

export default RightView;
