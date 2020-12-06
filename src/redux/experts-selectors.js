export const getExpertsState = (state) => {
  return state.expertsPage.experts;
}

export const getUniqCitiesState = (state) => {
  return state.expertsPage.uniqCities;
}

export const getExpertsLoadingState = (state) => {
  return state.expertsPage.loadingExperts;
}

export const getExpertsPageSaizeState = (state) => {
  return state.expertsPage.pageSize;
}

export const getExpertsPageCountState = (state) => {
  return state.expertsPage.totalPageCount;
}

export const getExpertsCurrentPageState = (state) => {
  return state.expertsPage.currentPage;
}