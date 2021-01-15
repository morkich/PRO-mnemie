export const getRegisterDataState = (state) => {
  return state.register.registerData;
}

export const getRegisterNameState = (state) => {
  return state.register.registerName;
}

export const getRegisterErrorState = (state) => {
  return state.register.requestError;
}

export const getRegisterLoadingState = (state) => {
  return state.register.registerLoading;
}