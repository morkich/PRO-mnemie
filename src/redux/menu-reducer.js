import { optionsAPI } from "../api/api";

const SET_MENU = 'SET_MENU';
const SET_LOADING = 'SET_LOADING';

let initialState = {
  menu: [
    {
      "ID": 8,
      "post_author": "1",
      "post_date": "2020-08-18 14:06:48",
      "post_date_gmt": "2020-08-18 11:06:48",
      "post_content": "",
      "post_title": "Главное",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "closed",
      "ping_status": "closed",
      "post_password": "",
      "post_name": "glavnoe",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2020-08-18 19:48:12",
      "post_modified_gmt": "2020-08-18 16:48:12",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "http://proview.loc/?p=8",
      "menu_order": 1,
      "post_type": "nav_menu_item",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw",
      "db_id": 8,
      "menu_item_parent": "0",
      "object_id": "8",
      "object": "custom",
      "type": "custom",
      "type_label": "Произвольная ссылка",
      "title": "Главное",
      "url": "#",
      "target": "",
      "attr_title": "",
      "description": "",
      "classes": [
          ""
      ],
      "xfn": ""
  },
  {
      "ID": 9,
      "post_author": "1",
      "post_date": "2020-08-18 14:06:49",
      "post_date_gmt": "2020-08-18 11:06:49",
      "post_content": "",
      "post_title": "Карьера",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "closed",
      "ping_status": "closed",
      "post_password": "",
      "post_name": "karera",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2020-08-18 19:48:12",
      "post_modified_gmt": "2020-08-18 16:48:12",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "http://proview.loc/?p=9",
      "menu_order": 2,
      "post_type": "nav_menu_item",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw",
      "db_id": 9,
      "menu_item_parent": "0",
      "object_id": "9",
      "object": "custom",
      "type": "custom",
      "type_label": "Произвольная ссылка",
      "title": "Карьера",
      "url": "http://№",
      "target": "",
      "attr_title": "",
      "description": "",
      "classes": [
          ""
      ],
      "xfn": ""
  },

  ],
  loading: true
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.menu
      }      
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}


export const setMenu = (menu) => {
  return {
    type: SET_MENU,
    menu
  }
}

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading
  }
}

export const setMenuThunk = (menuId = 15) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    optionsAPI.getMenu(menuId).then(response => {
      dispatch(setMenu(response));
      dispatch(setLoading(false));
    })    
  }
}

export default menuReducer;