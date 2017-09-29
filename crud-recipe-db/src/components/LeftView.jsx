import React from 'react';
import PropTypes from 'prop-types';

import RecipeButton from './RecipeButton';
import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

const LeftView = ({ recipes, onCreateRecipe, onSelect, onSearch }) => (
  <div>
    <RecipeButton onClick={onCreateRecipe} />
    <RecipeFilter onSearch={onSearch} />
    <RecipeList
      recipes={recipes}
      onSelect={onSelect} />
  </div>
);

LeftView.propTypes = {
  recipes: PropTypes.array,
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  onCreateRecipe: PropTypes.func
};

LeftView.defaultProps = {
  recipes: [],
  onSelect: () => { },
  onSearch: () => { },
  onCreateRecipe: () => { }
};

export default LeftView;
