import React, { useState } from 'react';
import { connect } from 'react-redux';
import { infinityPostLoadThunk } from '../../redux/experts-reducer';
import { getExpertsState, getExpertsLoadingState, getExpertsPageSaizeState, getExpertsCurrentPageState, getExpertsPageCountState } from '../../redux/experts-selectors';
import Experts from './Experts';

const ExpertsContainer = (props) => {

  let [currentPage, setCurrentPage] = useState(1);

  const infinityLoading = () => {
    props.infinityPostLoadThunk(currentPage, props.pageSize);
    setCurrentPage = currentPage++;
  }

  return (
    <Experts
      totalPageCount={props.totalPageCount}
      currentPage={props.currentPage}
      infinityLoading={infinityLoading}
      experts={props.experts}
      expertsLoading={props.expertsLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    experts: getExpertsState(state),
    pageSize: getExpertsPageSaizeState(state),
    totalPageCount: getExpertsPageCountState(state),
    currentPage: getExpertsCurrentPageState(state),
    expertsLoading: getExpertsLoadingState(state),
  }
}

export default connect(mapStateToProps,
  { infinityPostLoadThunk }
)(ExpertsContainer);