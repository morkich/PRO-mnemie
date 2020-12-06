const SET_NEWS_CARD = 'SET_NEWS_CARD';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_NEWS_IMG = 'SET_NEWS_IMG';

let initialState = {
  titleNewsCard: 'Заголовок',
  subtitleNewsCard: 'Подзаголовок',
  categoryNewsCard: 'Категория',
  imageNewsCard: 'url',
  contentNewsCard: '',
  viewsNewsCard: '100',
  commentsNewsCard: '15',
  isLoadingNewsCard: true
}

const newsCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_CARD:
      return {
        ...state,
        newsCard: action.newsCard
      };
    case SET_NEWS_IMG:
      return {
        ...state,
        image: action.newsImg
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}

export const setNewsCard = (newsCard) => {
  return {
    type: SET_NEWS_CARD,
    newsCard
  }
}

export const setNewsImg = (newsImg) => {
  return {
    type: SET_NEWS_IMG,
    newsImg
  }
}

export const toggleisLoading = (isLoading) => {
  return {
    type: TOGGLE_PRELOADER,
    isLoading
  }
}

export default newsCardReducer;