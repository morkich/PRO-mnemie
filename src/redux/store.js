import headerPageReducer from "./headerPage-reducer";
import userReducer from "./user-reducer";
import footerPageReducer from "./footerPage-reducer";

let store = {
  _state: {
    user: {
      autorization: 0,
      data: {
        firstName: 'Вадим',
        lastName: 'Чуб',
        shortLastName: '',
        avatar: 'https://sun9-19.userapi.com/c6063/v6063774/b54b/nRzTteJwDDw.jpg',
        login: 'login',
        password: 'password',
      }
    },
    headerPage: {
      topMenu: [
        { to: '/home', name: 'Главная' },
        { to: '/career', name: 'Карьера' },
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
    },
    footerPage: {

    }
  },
  getState() {
    return this._state;
  },
  renderAllThree() {
    console.log('Функция renderAllThree не определена. Сайт не может отрисовать измемения.');
  },
  subscribe(observer) {
    this.renderAllThree = observer;
  },
  dispatch(action) {
    this._state.headerPage = headerPageReducer(this._state.headerPage, action);
    this._state.footerPage = footerPageReducer(this._state.footerPage, action);
    this._state.user = userReducer(this._state.user, action);
    
    this.renderAllThree(this);
  }
}

export default store;
window.store = store;