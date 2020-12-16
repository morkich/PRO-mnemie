import headerPageReducer from "./headerPage-reducer";
import footerPageReducer from "./footerPage-reducer";
import expertsReducer from "./experts-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import postLoopReducer from "./postLoop-reducer";
import favoriteReducer from "./favorive-reducer";
import optionsReducer from "./options-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk";
import newsCardReducer from "./newsCard-reducer";
import postReducer from "./post-reducer";
import filtersReducer from "./filters-reducer";
import authorReducer from "./author-reducer";
import likesReducer from "./likes-reducer";
import tagsReducer from "./tags-reducer";
import commentsReducer from "./comments-reducer";
import menuReducer from "./menu-reducer";
import asideReducer from "./aside-reducer";
import vacancyLoopReducer from "./vacancyLoop-reducer";
import vacancyReducer from "./vacancy-reducer";
import eventLoopReducer from "./eventLoop-reducer";
import eventReducer from "./event-reducer";
import courseLoopReducer from "./courseLoop-reducer";
import pageReducer from "./page-reducer";
import modalReducer from "./modal-reducer";
import registerReducer from "./rigister-reducer";
import freshPostReducer from "./freshPost-reducer";
import upComingEventsReducer from "./upComingEvents-reducer";
import asideBannersReducer from "./asideBanner-reducer";
import expertsDonateReducer from "./expertsDonate-reducer";
import avatarChangeReducer from "./avatarChange-reducer";
import yourDataReducer from "./yourData-reducer";
import postImageReducer from "./addPostImage-reducer";
import addPostReducer from "./addNewPost-reducer";
import addTagsReducer from "./addTags-reducer";
import categorySelectReducer from "./categorySelect-reducer";
import tvLoopReducer from "./tvLoop-reducer";
import TVItemReducer from "./tvItem-reducer";


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    headerPage: headerPageReducer,
    footerPage: footerPageReducer,
    expertsPage: expertsReducer,
    profilePage: profileReducer,
    auth: authReducer,
    favorite: favoriteReducer,
    options: optionsReducer,
    postLoop: postLoopReducer,
    newsCard: newsCardReducer,
    post: postReducer,
    filters: filtersReducer,
    author: authorReducer,
    likes: likesReducer,
    tags: tagsReducer,
    comments: commentsReducer,
    menu: menuReducer,
    aside: asideReducer,
    vacancyLoop: vacancyLoopReducer,
    vacancy: vacancyReducer,
    eventLoop: eventLoopReducer,
    event: eventReducer,
    courseLoop: courseLoopReducer,
    page: pageReducer,
    modal: modalReducer,
    register: registerReducer,
    freshPost: freshPostReducer,
    upComingEvents: upComingEventsReducer,
    asideBanners: asideBannersReducer,
    expertsDonate: expertsDonateReducer,
    avatarChange: avatarChangeReducer,
    yourData: yourDataReducer,
    addPostImage: postImageReducer,
    addPost: addPostReducer,
    addTags: addTagsReducer,
    categorySelect: categorySelectReducer,
    tvLoop: tvLoopReducer,
    tvItem: TVItemReducer,
    form: formReducer
});
 
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;