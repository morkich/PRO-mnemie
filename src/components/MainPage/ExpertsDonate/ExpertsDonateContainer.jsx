import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExpertsDonateSpanThunk, getExpertsDonateItemsThunk } from '../../../redux/expertsDonate-reducer';
import { getExpertsDonateItemsState, getExpertsDonateLoadingState, getExpertsDonateSpanState } from '../../../redux/expertsDonate-selectors';
import ExpertsDonate from './ExpertsDonate';

const ExpertsDonateContainer = (props) => {
    
  let title = props.title,
  expertsDonateSpan = props.expertsDonateSpan,
  getExpertsDonateItemsThunk = props.getExpertsDonateItemsThunk,
  getExpertsDonateSpanThunk = props.getExpertsDonateSpanThunk;

  useEffect(() => {
    getExpertsDonateSpanThunk();
  }, [title, getExpertsDonateSpanThunk])

  useEffect(() => { 
    expertsDonateSpan && getExpertsDonateItemsThunk();
  },[expertsDonateSpan, getExpertsDonateItemsThunk])

  return (    
    <>
      <ExpertsDonate 
        title={title}
        span={expertsDonateSpan}
        expertsDonateItems={props.expertsDonateItems}
        expertsDonateLoading={props.expertsDonateLoading}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    expertsDonateItems: getExpertsDonateItemsState(state),
    expertsDonateSpan: getExpertsDonateSpanState(state),
    expertsDonateLoading: getExpertsDonateLoadingState(state)
  }
}
export default 
  connect(
    mapStateToProps, {getExpertsDonateSpanThunk, getExpertsDonateItemsThunk})
    (ExpertsDonateContainer);