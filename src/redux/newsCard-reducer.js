import { mediaAPI } from "../api/api";

const SET_NEWS_CARD = 'SET_NEWS_CARD';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_NEWS_IMG = 'SET_NEWS_IMG';

let initialState = {
  title: 'Заголовок',
  subtitle: 'Подзаголовок',
  category: 'Категория',
  image: 'url',
  content: '',
  views: '100',
  comments: '15',
  isLoading: true
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