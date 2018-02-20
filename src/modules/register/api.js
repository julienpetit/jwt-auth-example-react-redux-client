import { handleApiErrors } from '../../lib/api-errors';

const api = {
  register({ payload }) {
    return fetch(`${process.env.REACT_APP_HOST_API}/api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  }
};

export default api;
