import userReducer from "./user-reducer";
import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    user: userReducer,
    headerPage: headerPageReducer,
    footerPage: footerPageReducer
});

let store = createStore(reducers);

export default store;