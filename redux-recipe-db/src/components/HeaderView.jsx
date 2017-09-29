import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderView = ({ title }) => (
  <div className="page-header">
    <Link to="/">
      <h1>{title}</h1>
    </Link>
  </div>
);

HeaderView.propTypes = {
  title: PropTypes.string
};

HeaderView.defaultProps = {
  title: 'My Header'
};

export default HeaderView;
