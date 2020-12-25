import * as axios from 'axios';

let domen = window.location.origin;
const auth = axios.create({
  baseURL: `${domen}/wp-json/`,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
});

const noAuth = axios.create({
  baseURL: `${domen}/wp-json/`,
});

export const itemAPI = {
  getItem(item) {
    return noAuth.get(`wp/v2/${item}/`)
    .then(response => response.data);
  },
  getItemById(item, itemId) {
    return noAuth.get(`wp/v2/${item}/?include=${itemId}`)
    .then(response => response.data);
  },
  getItemCount(item, count) {
    return noAuth.get(`wp/v2/${item}?per_page=${count}`)
    .then(response => response.data);
  },
  getItemByAuthor(item, authorId) {
    return noAuth.get(`wp/v2/${item}?author=${authorId}&per_page=11`)
    .then(response => response.data);
  },
  getItemByAuthorUnlimited(item, authorId) {
    return noAuth.get(`wp/v2/${item}?author=${authorId}&per_page=100`)
    .then(response => response.data);
  },
  postNewImage(token, image, filename, filetype = 'jpg') {
    const authPostFile = axios.create({
      baseURL: `${domen}/wp-json/`,
      headers: { 
        'Authorization': `Bearer ${token}`,
        'data-binary': `@/home/web/${filename}`, 
        'content-disposition': `attachment; filename=${filename}`,
        'Content-Type': filetype
      },
    });
    return authPostFile.post(`wp/v2/media`, image)    
  },
  deleteItem(itemId, itemType = 'posts'){
    return auth.delete(`wp/v2/${itemType}/${itemId}`)
  }
}

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
  },
  changeAvatar(userId, imageId) {
    return auth.post(`wp/v2/changeavatar/${imageId}/${userId}`)
  }
}

export const optionsAPI = {
  getLogo() {
    return noAuth.get(`wp/v2/theme_options/logo`)
      .then(response => response.data);
  }, 
  getAsideBanners() {
    return noAuth.get(`wp/v2/theme_options/asidebanners`)
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
  getAuthToken() {
    return noAuth.get(`wp/v2/loading`)
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
  getPopularPostForTimes(times = 'mounth'){
    return noAuth.get(`wp/v2/post_likes/${times}`)
    .then(response => response.data);
  },  
  setLikesToPost(id, data, postType = 'posts') {
    return auth.post(`wp/v2/${postType}/${id}`, data)
  },
  postUpdatePost(data, postId, postType = 'posts') {
    return auth.post(`wp/v2/${postType}/${postId}`, data)
  },
  postNewPost(data, postType = 'posts'){
    return auth.post(`wp/v2/${postType}/`, data)
  }
}

export const mediaAPI = {
  getMediaById(idMedia) {
    return noAuth.get(`wp/v2/media/${idMedia}`)
    .then(response => response.data);
  }
}

export const catAPI = {
  getAllCat(catName = 'categories') {
    return noAuth.get(`wp/v2/${catName}?per_page=100&exclude=35,16,30,25`)
    .then(response => response.data);
  },
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
  getTags(ids, tagType = 'tags') {
    return noAuth.get(`wp/v2/${tagType}?include=${ids}&per_page=100`)
    .then(response => response.data);  
  },
  getAllTags(tagsType = 'tags') {
    return noAuth.get(`wp/v2/${tagsType}?per_page=100`)
    .then(response => response.data);  
  },
  postNewTag(data, tagsType = 'tags') {
    return auth.post(`wp/v2/${tagsType}`, data)
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

export const searchAPI = {
  getSearchRequest(query) {
    return noAuth.get(`wp/v2/global_search/${query}`)
    .then(response => response.data);
  }
}

export const viewAPI = {
  setPostLike(postId, fieldName = 'pro_views') {
    return noAuth.get(`wp/v2/view/${postId}/${fieldName}`)
    .then(response => response.data);
  }
}