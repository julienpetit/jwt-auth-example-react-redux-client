import React from 'react';
import { Form } from 'semantic-ui-react';

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <Form.Field error={touched && (!!error || !!warning)}>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched &&
      ((error && <strong>{error}</strong>) ||
        (warning && <strong>{warning}</strong>))}
  </Form.Field>
);
