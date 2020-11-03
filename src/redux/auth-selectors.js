export const getAuthData = (state) => {
  return state.auth;
}

export const getLoggetIn = (state) => {
  return state.auth.loggetIn;
}

export const getLoadingAcc = (state) => {
  return state.auth.loadingAcc;
}

export const getUserId = (state) => {
  return state.auth.userId;
}

export const getFirstname = (state) => {
  return state.auth.firstname;
}

export const getSecondname = (state) => {
  return state.auth.secondname;
}

export const getLastname = (state) => {
  return state.auth.lastname;
}

export const getAvatar = (state) => {
  return state.auth.avatar;
}

export const getDiscription = (state) => {
  return state.auth.pro_discription;
}

export const getExpirience = (state) => {
  return state.auth.pro_expirience;
}

export const getPosition = (state) => {
  return state.auth.pro_position;
}

export const getCity = (state) => {
  return state.auth.pro_city;
}

export const getWorkplace = (state) => {
  return state.auth.pro_workplace;
}

export const getRaiting = (state) => {
  return state.auth.pro_raiting;
}

export const getToken = (state) => {
  return state.auth.token;
}

export const getFavoritesExperts = (state) => {
  return state.auth.favoritesExperts;
}

export const getFavoritesExpertsButtonProgress = (state) => {
  return state.favorite.favoriteExpertsButtonProgress;
}