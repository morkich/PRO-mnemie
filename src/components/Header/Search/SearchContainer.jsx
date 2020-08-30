import React from 'react';
import { searchRequestCreator, sendSearchRequestCreator } from '../../../redux/headerPage-reducer';
import Search from './Search';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    searchData: state.headerPage.search
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeSearchRequest: (searchBody) => {
      let action = searchRequestCreator(searchBody);
      dispatch(action);
    },
    sendSearchRequest: (body) => {
      let action = sendSearchRequestCreator(body);
      dispatch(action);
    }
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer; 