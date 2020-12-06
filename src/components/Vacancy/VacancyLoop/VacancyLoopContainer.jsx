import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVacanciesDataThunk } from '../../redux/vacancyLoop-reducer';
import { getVacancyLoopItemsState, getVacancyLoopLoadingState } from '../../redux/vacancyLoop-selectors';
import VacancyLoop from './VacancyLoop';

const VacancyLoopContainer = (props) => {

  useEffect(() => {
    props.getVacanciesDataThunk();
  }, [])

  return (
    <VacancyLoop 
      items={props.vacancies}
      loading={props.vacancyLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    vacancyLoading: getVacancyLoopLoadingState(state),
    vacancies: getVacancyLoopItemsState(state),
  }
}

export default connect(mapStateToProps,
  {getVacanciesDataThunk}
)(VacancyLoopContainer);