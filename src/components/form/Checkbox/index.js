import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

export default ({
  input,
  label,
  type,
  onChange,
  meta: { touched, error, warning }
}) => (
  <Form.Field error={touched && (!!error || !!warning)}>
    <Checkbox
      label={label}
      checked={input.value}
      onChange={(e, data) => input.onChange(data.checked)}
    />

    {touched &&
      ((error && <strong>{error}</strong>) ||
        (warning && <strong>{warning}</strong>))}
  </Form.Field>
);
