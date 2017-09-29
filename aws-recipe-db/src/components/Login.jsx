import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

import * as actions from '../actions';
import FormInput from './FormInput';

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={FormInput}
      label="email"
      type="email"
      placeholder="Enter email" />

    <Field
      name="password"
      component={FormInput}
      label="password"
      type="password"
      placeholder="Enter password" />

    <Button type="submit">Login</Button>
  </form>
);

const LoginForm = reduxForm({
  form: 'loginForm'
})(Login);

export default connect(
  state => ({
    user: state.recipes.user
  }),
  {
    onSubmit: actions.login
  }
)(LoginForm);
