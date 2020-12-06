export const getPostsState = (state) => {
  return state.postLoop.posts;
}

export const getTotalPageCount = (state) => {
  return state.postLoop.totalPageCount;
}

export const getCurrentPage = (state) => {
  return state.postLoop.currentPage;
}

export const getParentCat = (state) => {
  return state.postLoop.parentCatPostLoop;
}

export const getParentCatName = (state) => {
  return state.postLoop.parentCatNamePostLoop;
}

export const getLoadingPostsState = (state) => {
  return state.postLoop.loadingPostLoop;
}

export const getIsMeta = (state) => {
  return state.postLoop.metaData;
}