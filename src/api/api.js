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
  getAllUniqCities() {
    return noAuth.get(`wp/v2/users/cities`)
      .then(response => response.data);
  },
  setUserData(data) {
    return auth.post(`wp/v2/users/me`, data)
  }
}

export const optionsAPI = {
  getLogo() {
    return noAuth.get(`wp/v2/theme_options/logo`)
      .then(response => response.data);
  }
}

export const authAPI = {
  getAccount(token) {
    const myHeaders = { headers: { 'Authorization': `Bearer ${token}` } };
    return noAuth.get(`wp/v2/users/me`, myHeaders)
      .then(response => response.data);
  },
  getToken(username, password) {
    const headers = { username: username, password: password };
    return noAuth.post(`jwt-auth/v1/token`, headers)
      .then(response => response.data);
  }
}

export const filterExpertAPI = {
  getfilterExpert(filter, query) {
    return noAuth.get(`wp/v2/users/filtered/${filter}/${query}`)
      .then(response => response.data);
  }, 
}