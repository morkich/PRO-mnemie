import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import favoriteReducer from "./favorive-reducer";
import optionsReducer from "./options-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk";


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    options: optionsReducer,
    form: formReducer
});
 
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;