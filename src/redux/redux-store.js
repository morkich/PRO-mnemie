import userReducer from "./user-reducer";
import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    user: userReducer,
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer
});

let store = createStore(reducers);

export default store;