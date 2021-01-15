import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getSearchRequestThunk } from '../../../../redux/search-reducer';
import { getSearchLoadingState, getSearchQueryState, getSearchResultState } from '../../../../redux/search-selectors';
import SearchRequestBlock from './SearchRequestBlock';

const SearchRequestBlockContainer = (props) => {

  let query = props.match.params.searchQuery,
  getSearchRequestThunk = props.getSearchRequestThunk;
  
  useEffect(() => {
    query && getSearchRequestThunk(query);
  }, [query, getSearchRequestThunk])

  return (
    <SearchRequestBlock 
      searchResult={props.searchResult}
      searchQuery={props.searchQuery}
      sarchLoading={props.sarchLoading}
    />
  );
}

let mapStateToProps = (state) => {
  return {
    searchResult: getSearchResultState(state),
    searchQuery: getSearchQueryState(state),
    sarchLoading: getSearchLoadingState(state)
  }
}

export default compose(connect(mapStateToProps, {getSearchRequestThunk}), 
  withRouter
  )(SearchRequestBlockContainer); 