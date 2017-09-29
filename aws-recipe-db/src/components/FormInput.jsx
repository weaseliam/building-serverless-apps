import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const FormInput = ({ label, type, placeholder, input }) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type={type}
      placeholder={placeholder}
      {...input}
    />
  </FormGroup>
);

export default FormInput;
