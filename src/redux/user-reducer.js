const LOG_IN = 'LOG-IN';

let initialState = {
  autorization: 0,
  data: {
    firstName: 'Вадим',
    lastName: 'Чуб',
    avatar: 'https://sun9-19.userapi.com/c6063/v6063774/b54b/nRzTteJwDDw.jpg',
    login: 'login',
    password: 'password',
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        data: { ...state.data },
        autorization: action.autorization
      };
    default:
      return state;
  }
}

export const loginCreator = (autorization) => {
  return {
    type: LOG_IN,
    autorization: autorization,
  }
}

export default userReducer;