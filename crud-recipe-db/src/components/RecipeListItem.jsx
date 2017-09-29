import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ name, onSelect }) => (
  <li>
    <a
      style={{ cursor: 'pointer' }}
      onClick={onSelect}
    >
      {name}
    </a>
  </li>
);

RecipeListItem.propTypes = {
  name: PropTypes.string,
  onSelect: PropTypes.func
};

RecipeListItem.defaultProps = {
  name: 'My RecipeListItem',
  onSelect: () => { }
};

export default RecipeListItem;
