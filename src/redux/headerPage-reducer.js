const SEARCH_REQUEST = 'SEARCH-REQUEST';
const SEND_SEARCH_REQUEST = 'SEND-SEARCH-REQUEST';

let initialState = {
  topMenu: [
    { to: '/home', name: 'Главная' },
    { to: '/posts/16', name: 'Карьера' },
    { to: '/events', name: 'События' },
    { to: '/study', name: 'Образование' },
    { to: '/media', name: 'Медиа' },
    { to: '/analitycs', name: 'Аналитика' },
    { to: '/tv', name: 'TV PRO мнение' },
    { to: '/experts', name: 'Эксперты' },
    { to: '/about', name: 'О нас' },
  ],
  search: {
    searchRequest: '',
    searchText: ''
  },
}

const headerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        search: {
          searchRequest: action.request,
          searchText: action.request
        }
      };
    case SEND_SEARCH_REQUEST:
      return {
        ...state,
        search: {
          searchRequest: '',
          searchText: action.request
        }
      };
    default:
      return state;
  }
}

export const sendSearchRequestCreator = (value) => {
  return {
    type: SEND_SEARCH_REQUEST,
    request: value,
  }
}

export const searchRequestCreator = (value) => {
  return {
    type: SEARCH_REQUEST,
    request: value,
  }
}

export default headerPageReducer;