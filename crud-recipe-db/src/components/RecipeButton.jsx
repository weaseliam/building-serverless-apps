import React from 'react';
import PropTypes from 'prop-types';

const RecipeButton = ({ onClick }) => (
  <button
    type="button"
    className='btn btn-primary'
    style={{ width: '100%', marginBottom: '5px' }}
    onClick={onClick}
  >
    Create
  </button>
);

RecipeButton.propTypes = {
  onClick: PropTypes.func
};

RecipeButton.defaultProps = {
  onClick: () => { }
};

export default RecipeButton;
