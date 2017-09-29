import React from 'react';
import PropTypes from 'prop-types';

const RecipeFilter = ({ onSearch }) => (
  <input
    type="text"
    className="form-control"
    style={{ width: '100%', marginBottom: '5px' }}
    placeholder="Enter search text"
    onChange={e => onSearch(e.target.value)} />
);

RecipeFilter.propTypes = {
  onSearch: PropTypes.func
}

RecipeFilter.defaultProps = {
  onSearch: () => { }
}

export default RecipeFilter;
