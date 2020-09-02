import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer,
    profilePage: profileReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;