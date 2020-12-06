import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addFavoriteExpert, removeFavoriteExpert } from '../../../redux/auth-reducer';
import { getFavoritesEvents, getFavoritesExperts, getFavoritesExpertsButtonProgress, getLoggetIn } from '../../../redux/auth-selectors';
import { toggleFavoriteProgress, favoriteThunkCreator } from '../../../redux/favorive-reducer';
import Favorites from './Favorites';


const FavoritesContainer = (props) => {

  let favoritesIds = props.favoriteExpertsState,
      favoriteEventsState = props.favoriteEventsState,
      expertId = props.expertId,
      toggleFavoriteProgress = props.toggleFavoriteProgress,
      addFavoriteExpert = props.addFavoriteExpert,
      removeFavoriteExpert = props.removeFavoriteExpert,
      type = props.type;

  if(props.type === 'event') favoritesIds = favoriteEventsState;

  useEffect(() => {
    expertId && toggleFavoriteProgress(true, expertId);
    let favorites = favoritesIds.some(id => id === +expertId);    
    if(type === 'event') {
      favorites = favoriteEventsState.some(id => id === +expertId);
    }
    favorites ? addFavoriteExpert() : removeFavoriteExpert();
    toggleFavoriteProgress(false, expertId);
  }, [expertId, toggleFavoriteProgress, removeFavoriteExpert, addFavoriteExpert, favoriteEventsState, type])

  const removeThisFavorite = () => {
    props.favoriteThunkCreator(props.expertId, favoritesIds, false, props.type);
  }
  const addThisFavorite = () => {
    props.favoriteThunkCreator(props.expertId, favoritesIds, true, props.type);
  }

  return(
    <Favorites
      darkTheme={props.darkTheme}
      expertId={props.expertId}
      loggetIn={props.loggetIn}
      favoriteExpertsButtonProgress={props.favoriteExpertsButtonProgress}
      favoriteExpertsState={favoritesIds}
      addThisFavorite={addThisFavorite}
      removeThisFavorite={removeThisFavorite}
    />   
  )
}

let mapStateToProps = (state) => {
  return {
    favoriteExpertsState: getFavoritesExperts(state),
    favoriteEventsState: getFavoritesEvents(state),
    favoriteExpertsButtonProgress: getFavoritesExpertsButtonProgress(state),
    loggetIn: getLoggetIn(state)
  }
}

export default connect(mapStateToProps,
  { addFavoriteExpert, removeFavoriteExpert, toggleFavoriteProgress, 
    favoriteThunkCreator }
)(FavoritesContainer);