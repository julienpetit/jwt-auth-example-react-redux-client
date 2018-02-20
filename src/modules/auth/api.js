import { handleApiErrors } from '../../lib/api-errors';

const api = {
  login({ payload }) {
    let data = new FormData();
    data.append('_username', payload.username);
    data.append('_password', payload.password);

    return fetch(`${process.env.REACT_APP_HOST_API}/login_check`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: data
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  },

  refreshToken(refreshToken) {
    let data = new FormData();
    data.append('refresh_token', refreshToken);

    return fetch(`${process.env.REACT_APP_HOST_API}/api/token/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: data
    })
      .then(handleApiErrors)
      .then(response => response.json())
      .then(data => data);
  }
};

export default api;
