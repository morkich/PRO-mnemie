export const getFreshPostNumberState = (state) => {
  return state.freshPost.number;
}

export const getFreshPostItemsState = (state) => {
  return state.freshPost.freshPosts;
}

export const getFreshPostLoadingState = (state) => {
  return state.freshPost.loadingFreshPosts;
}