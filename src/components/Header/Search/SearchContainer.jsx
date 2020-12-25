import React, { useState } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { getSearchRequestThunk } from '../../../redux/search-reducer';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getSearchQueryState } from '../../../redux/search-selectors';


const SearchContainer = (props) => {

  let [thisSearchPage, setThisSearchPage] = useState(false);

  const onFormSubmit = (formData) => {    
    setThisSearchPage(!props.location.pathname.includes('/search'));
    props.getSearchRequestThunk(formData.s);   
  };
 
 
  return(
    <>
      {thisSearchPage && <Redirect to={`/search/${props.searchQuery}`} noThrow />}
      <Search 
        onFormSubmit={onFormSubmit}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    searchQuery: getSearchQueryState(state)
  }
}

export default compose(connect(mapStateToProps,
  {getSearchRequestThunk}),
  withRouter
)(SearchContainer);