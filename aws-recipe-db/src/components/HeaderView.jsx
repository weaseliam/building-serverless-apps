import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

const HeaderView = ({ title }) => (
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <h1>{title}</h1>
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <IndexLinkContainer to="/login">
          <NavItem>Login</NavItem>
        </IndexLinkContainer>
      </Nav>
      <Nav pullRight>
      <IndexLinkContainer to="/signup">
        <NavItem>Signup</NavItem>
      </IndexLinkContainer>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);

HeaderView.propTypes = {
  title: PropTypes.string
};

HeaderView.defaultProps = {
  title: 'My Header'
};

export default HeaderView;
