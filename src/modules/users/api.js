import { handleApiErrors } from '../../lib/api-errors';

const api = {
  getAll(action, token) {
    return fetch(`${process.env.REACT_APP_HOST_API}/api/users`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
      },
      mode: 'cors'
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  },

  get(action, token) {
    return fetch(
      `${process.env.REACT_APP_HOST_API}/api/users/${action.payload}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        mode: 'cors'
      }
    )
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  },

  update(action, token) {
    return fetch(
      `${process.env.REACT_APP_HOST_API}/api/users/${action.payload.id}`,
      {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(action.payload),
        mode: 'cors'
      }
    )
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  }
};

export default api;
