export const getPostsState = (state) => {
  return state.postLoop.posts;
}

export const getTotalPageCount = (state) => {
  return state.postLoop.totalPageCount;
}

export const getCurrentPage = (state) => {
  return state.postLoop.currentPage;
}

export const getLoadingPostsState = (state) => {
  return state.postLoop.loading;
}

export const getIsMeta = (state) => {
  return state.postLoop.metaData;
}