import React from 'react';
import PropTypes from 'prop-types';

const HeaderView = ({ title }) => (
  <div className="page-header">
    <a href="/"><h1>{title}</h1></a>
  </div>
);

HeaderView.propTypes = {
  title: PropTypes.string
};

HeaderView.defaultProps = {
  title: 'My Header'
};

export default HeaderView;
