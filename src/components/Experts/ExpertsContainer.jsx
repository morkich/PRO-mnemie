import React from 'react';
import { connect } from 'react-redux';
import Experts from './Experts';
import { unfavoritesAC, setExpertsAC, favoritesAC } from '../../redux/experts-reducer';

let mapStateToProps = (state) => {
  return {
    experts: state.expertsPage.experts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      addFavorives: (expertId) => {
        let action = favoritesAC(expertId);
        dispatch(action);
      },
      removeFavorites: (expertId) => {
        let action = unfavoritesAC(expertId); 
        dispatch(action);
      },
      setExperts: (experts) => {
        let action = setExpertsAC(experts);
        dispatch(action);
      }
  }
}

const ExpertsContainer = connect(mapStateToProps, mapDispatchToProps)(Experts);

export default ExpertsContainer;