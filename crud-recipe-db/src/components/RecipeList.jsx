import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, onSelect }) => (
  <ul className="list-unstyled">
    {
      recipes.map((recipe, index) => (
        <RecipeListItem
          name={recipe.name}
          key={index}
          onSelect={() => onSelect(recipe)} />
      ))
    }
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onSelect: PropTypes.func
};

RecipeList.defaultProps = {
  recipes: [],
  onSelect: () => { }
};

export default RecipeList;
