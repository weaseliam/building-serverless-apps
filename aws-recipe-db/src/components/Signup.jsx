import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

import * as actions from '../actions';
import FormInput from './FormInput';

const Signup = ({ handleSubmit }) => (
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

    <Button type="submit">Signup</Button>
  </form>
);

const SignupForm = reduxForm({
  form: 'signupForm'
})(Signup);

export default connect(
  undefined,
  {
    onSubmit: actions.signup
  }
)(SignupForm);
