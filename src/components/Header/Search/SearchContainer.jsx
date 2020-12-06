import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';


const SearchContainer = (props) => {
  return(
    <Search />
  )
}

let mapStateToProps = (state) => {
  return {
    searchData: state.headerPage.search
  }
}

export default connect(mapStateToProps,
  {}
)(SearchContainer);; 