import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getVacancyDataThunk } from '../../redux/vacancy-reducer';
import { getVacancyLoadingState, getVacancyState } from '../../redux/vacancy-selectors';
import Vacancy from './Vacancy';

const VacancyContainer = (props) => {

  let getVacancyDataThunk = props.getVacancyDataThunk,
  vacancyId = props.match.params.vacancyId;

  useEffect(() => {
    getVacancyDataThunk(vacancyId);
  }, [vacancyId, getVacancyDataThunk])

  return (
    <Vacancy
      vacancy={props.vacancy}
      loading={props.vacancyLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    vacancy: getVacancyState(state),
    vacancyLoading: getVacancyLoadingState(state)
  }
}

export default compose(connect(mapStateToProps,
  {getVacancyDataThunk} ),
  withRouter,
)(VacancyContainer);