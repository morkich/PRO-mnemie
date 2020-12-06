import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFreshPostThunk } from '../../../redux/freshPost-reducer';
import { getFreshPostItemsState, getFreshPostLoadingState, getFreshPostNumberState } from '../../../redux/freshPost-selectors';
import FreshPost from './FreshPost';

const FreshPostContainer = (props) => {

  let numberPost = props.numberPost,
  getFreshPostThunk = props.getFreshPostThunk;
  
  useEffect(() => {
    numberPost && getFreshPostThunk(numberPost)
  }, [numberPost, getFreshPostThunk])
  
  

  return (
    <FreshPost 
      itemsFresh={props.itemsFresh}
      loading={props.freshLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    numberPost: getFreshPostNumberState(state),
    itemsFresh: getFreshPostItemsState(state),
    freshLoading: getFreshPostLoadingState(state)
  }
}
export default 
  connect(
    mapStateToProps, {getFreshPostThunk})
    (FreshPostContainer);