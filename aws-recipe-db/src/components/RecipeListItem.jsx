import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ recipe }) => (
  <li>
    <Link to={`/recipes/${recipe.id}`}
      style={{ cursor: 'pointer' }}
    >
      {recipe.name}
    </Link>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object
};

RecipeListItem.defaultProps = {
  recipe: {
    name: "My recipe"
  }
};

export default RecipeListItem;
