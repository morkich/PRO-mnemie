import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthorDataThunk } from '../../redux/author-reducer';
import { getAuthorDataState, getAuthorLoadingState } from '../../redux/author-selectors';
import Author from './Author';

const AuthorContainer = (props) => {

  let id = props.id,
  getAuthorDataThunk = props.getAuthorDataThunk;

  useEffect(() => {
    getAuthorDataThunk(id);    
  }, [id, getAuthorDataThunk]);

  return (
    <Author 
      author={props.author}
      loading={props.loading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    author: getAuthorDataState(state),
    loading: getAuthorLoadingState(state)
  }
}

export default connect(mapStateToProps, {getAuthorDataThunk})(AuthorContainer); 