import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getTVItemLoadingState, getTVItemState } from '../../../redux/tvItem-selectors';
import { getTVItemDataThunk } from '../../../redux/tvItem-reducer';
import TVItem from './TVItem';
import { getUserId } from '../../../redux/auth-selectors';

const TVItemContainer = (props) => {

  let itemId = props.match.params.videoId,
  getTVItemDataThunk = props.getTVItemDataThunk;

  useEffect(() => {
    itemId && getTVItemDataThunk(itemId);
  }, [getTVItemDataThunk, itemId])

  return (
    <TVItem
      tvItem={props.tvItem}
      loadingTVItem={props.loadingTVItem}
      userId={props.userId}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    tvItem: getTVItemState(state),
    userId: getUserId(state),
    loadingTVItem: getTVItemLoadingState(state),
  }
}

export default compose(connect(mapStateToProps,
  {getTVItemDataThunk} ),
  withRouter,
)(TVItemContainer);