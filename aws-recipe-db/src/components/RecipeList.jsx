import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes }) => (
  <ul className="list-unstyled">
    {
      recipes.map((recipe, index) => (
        <RecipeListItem
          recipe={recipe}
          key={index} />
      ))
    }
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
};

RecipeList.defaultProps = {
  recipes: [],
};

export default RecipeList;
