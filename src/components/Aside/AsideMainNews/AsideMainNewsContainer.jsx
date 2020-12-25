import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAsideMainNewsItemsState, getAsideMainNewsLoadingState, getAsideMainNewsTimesState } from '../../../redux/asideMainNews-selectors';
import { getAsideMainNewsThunk } from '../../../redux/asideMainNews-reducer';
import AsideMainNews from './AsideMainNews';

const AsideMainNewsContainer = (props) => {  
  let getAsideMainNewsThunk = props.getAsideMainNewsThunk;


  useEffect(() => {
    getAsideMainNewsThunk('week');
  }, [getAsideMainNewsThunk])


  const changeFilter = (times) => {
    getAsideMainNewsThunk(times);
  }

  return (
    <AsideMainNews  
      asideMainNewsItems={props.asideMainNewsItems}
      asideMainNewsLoading={props.asideMainNewsLoading}
      asideMainNewsTimes={props.asideMainNewsTimes}
      changeFilter={changeFilter}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    asideMainNewsItems: getAsideMainNewsItemsState(state),
    asideMainNewsTimes: getAsideMainNewsTimesState(state),
    asideMainNewsLoading: getAsideMainNewsLoadingState(state),
  }
}

export default connect(mapStateToProps, {getAsideMainNewsThunk})(AsideMainNewsContainer);