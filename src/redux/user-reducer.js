const LOG_IN = 'LOG-IN';

let initialState = {
  autorization: 0,
  data: {
    firstName: 'Вадим',
    lastName: 'Чуб',
    shortLastName: '',
    avatar: 'https://sun9-19.userapi.com/c6063/v6063774/b54b/nRzTteJwDDw.jpg',
    login: 'login',
    password: 'password',
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      state.autorization = action.autorization;
      state.data.shortLastName = `${state.data.lastName.substr(0, 1)}.`;
      return state;
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