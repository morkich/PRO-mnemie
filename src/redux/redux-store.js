import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import favoriteReducer from "./favorive-reducer";
import thunkMiddleware from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    favorite: favoriteReducer,
});
 
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;