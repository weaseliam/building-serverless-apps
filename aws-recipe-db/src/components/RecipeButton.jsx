import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeButton = ({ link }) => (
  <Link to={link}
    className='btn btn-primary'
    style={{ width: '100%', marginBottom: '5px' }}
  >
    Create
  </Link>
);

RecipeButton.propTypes = {
  link: PropTypes.string
};

RecipeButton.defaultProps = {
};

export default RecipeButton;
