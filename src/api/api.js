import * as axios from 'axios';

const auth = axios.create({
  baseURL: 'http://proview.loc/wp-json/',
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
});

const noAuth = axios.create({
  baseURL: 'http://proview.loc/wp-json/',
});

export const usersAPI = {
  getMe() {
    return auth.get(`wp/v2/users/me`)
      .then(response => response.data);
  },
  getExpert(userId = 1) {
    return noAuth.get(`wp/v2/users?include=${userId}`)
      .then(response => response.data);
  },
  getExperts(page = 1, pageSize = 10) {
    return noAuth.get(`wp/v2/users?page=${page}&per_page=${pageSize}`)
  },
  setUserData(data) {
    return auth.post(`wp/v2/users/me`, data)
  }
}

export const optionAPI = {
  getToken(username, password) {
    const headers = { username: username, password: password };
    return noAuth.post(`jwt-auth/v1/token`, headers)
      .then(response => response.data);
  }
}
