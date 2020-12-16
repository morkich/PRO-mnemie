import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getTVLoopItemsState, getTVLoopParentCatState, getTVLoopParentCatNameState, getTVLoopPageSizeState, getTVLoopPageCountState, getTVLoopCurrentPageState, getTVLoopLoadingState} from '../../redux/tvLoop-selectors';
import { getTVItemsDataThunk } from '../../redux/tvLoop-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import TVLoop from './TVLoop';

const TVLoopContainer = (props) => {

  let getTVItemsDataThunk = props.getTVItemsDataThunk;

  useEffect( () => {    
    getTVItemsDataThunk();
  }, [getTVItemsDataThunk]);

    return (
    <TVLoop
      tvLoopItems={props.tvLoopItems}
      loadingTVLoop={props.loadingTVLoop}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    tvLoopItems: getTVLoopItemsState(state),
    parentCatTVLoop: getTVLoopParentCatState(state),
    parentCatNameTVLoop: getTVLoopParentCatNameState(state),
    pageSizeTVLoop: getTVLoopPageSizeState(state),
    totalPageCount: getTVLoopPageCountState(state),
    currentPage: getTVLoopCurrentPageState(state),
    loadingTVLoop: getTVLoopLoadingState(state),
  } 
}

export default compose(connect(mapStateToProps,
  {getTVItemsDataThunk}),
  withRouter
)(TVLoopContainer);