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
  },
  postNewUser(userData) {
    return noAuth.post(`wp/v2/users/register`, userData)
  }
}

export const optionsAPI = {
  getLogo() {
    return noAuth.get(`wp/v2/theme_options/logo`)
      .then(response => response.data);
  }, 
  getMenu(menuId) {
    return noAuth.get(`wp/v2/navigation/${menuId}`)
      .then(response => response.data);
  }
}

export const authAPI = {
  getAccount(token) {
    const myHeaders = { headers: { 'Authorization': `Bearer ${token}` } };
    return noAuth.get(`wp/v2/users/me`, myHeaders)
      .then(response => response.data)
      .catch(err => {
        console.log(err);
      });
  },
  setAccountDataWithLiveToken(token, data) {
    const myHeaders = { headers: { 'Authorization': `Bearer ${token}` } };
    return noAuth.post(`wp/v2/users/me`, myHeaders, data)
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

export const postAPI = {
  getPosts(postName = 'posts') {
    return noAuth.get(`wp/v2/${postName}/`)
    .then(response => response.data);
  }, 
  getPostNumberOrder(number = 9, posts = 'posts', orderby = 'date', order = 'desc') {
    return noAuth.get(`wp/v2/${posts}?per_page=${number}&order=${order}&orderby=${orderby}`)
    .then(response => response.data);
  },
  getPostByIdCat(idCat, catName = 'categories', posts = 'posts') {
    return noAuth.get(`wp/v2/${posts}?${catName}=${idCat}`)
    .then(response => response.data);
  },
  getPostDataById(id, posts = 'posts') {
    return noAuth.get(`wp/v2/${posts}/${id}`)
    .then(response => response.data);
  },
  setLikesToPost(id, data) {
    return auth.post(`wp/v2/posts/${id}`, data)
  }
}

export const mediaAPI = {
  getMediaById(idMedia) {
    return noAuth.get(`wp/v2/media/${idMedia}`)
    .then(response => response.data);
  }
}

export const catAPI = {
  getCat(id, parent = false, catName = 'categories') {
    if(parent){
      return noAuth.get(`wp/v2/${catName}?parent=${id}`)
      .then(response => response.data);
    }else{
      return noAuth.get(`wp/v2/${catName}/${id}`)
      .then(response => response.data);
    }
  }
}

export const tagAPI = {
  getTags(ids) {
    return noAuth.get(`wp/v2/tags?include=${ids}`)
    .then(response => response.data);  
  }
}

export const commentAPI = {
  getComments(postId) {
    return noAuth.get(`wp/v2/comments/?post=${postId}`)
    .then(response => response.data);
  },
  setComment(data) {
    return auth.post(`/wp/v2/comments/`, data)
  }
}

export const vacanciesAPI = {
  getVacancies() {
    return noAuth.get(`wp/v2/vacancies/`)
    .then(response => response.data);
  },
  getVacancy(vacancyId = 0) {
    return noAuth.get(`wp/v2/vacancies/?include=${vacancyId}`)
    .then(response => response.data);
  },
  getfilterVacancies(filter, query) {
    return noAuth.get(`wp/v2/vacancies/filtered/${filter}/${query}`)
      .then(response => response.data);
  }, 
}

export const eventsAPI = {
  getEvents() {
    return noAuth.get(`wp/v2/events/`)
    .then(response => response.data);
  },
}

export const pagesAPI ={
  getPageBySlug(slug) {
    return noAuth.get(`wp/v2/pages?slug=${slug}`)
    .then(response => response.data);
  },
  getPageById(id) {
    return noAuth.get(`wp/v2/pages/${id}`)
    .then(response => response.data);
  }
}