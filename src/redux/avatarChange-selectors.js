export const getAvatarUrlState = (state) => {
  return state.avatarChange.avatarUrl;
}

export const getNewAvatarTypeState = (state) => {
  return state.avatarChange.newAvatarType;
}

export const getNewAvatarNameState = (state) => {
  return state.avatarChange.newAvatarName;
}

export const getAvatarLoadingState = (state) => {
  return state.avatarChange.avatarLoading;
}