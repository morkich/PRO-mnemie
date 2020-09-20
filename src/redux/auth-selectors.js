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

export const getLastname = (state) => {
  return state.auth.lastname;
}

export const getAvatar = (state) => {
  return state.auth.avatar;
}

export const getToken = (state) => {
  return state.auth.token;
}

export const getFavoritesExperts = (state) => {
  return state.auth.favoritesExperts;
}
