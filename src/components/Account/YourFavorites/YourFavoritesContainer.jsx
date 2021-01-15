import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import YourFavorites from './YourFavorites';
import { getYourFavoritesThunk } from '../../../redux/yourFavorites-reducer';
import { getYourFavoritesItemsState, getYourFavoritesLoadingState, getYourFavoritesTypeState } from '../../../redux/yourFavorites-selectors';
import { getFavoritesEvents, getFavoritesExperts, getFavoritesPost, getFavoritesVideos, getUserId } from '../../../redux/auth-selectors';

const YourFavoritesContainer = (props) => {

  console.log(props);
  
  let getYourFavoritesThunk = props.getYourFavoritesThunk,
  yourFavoritePosts = props.yourFavoritePosts,
  yourFavoriteEvents = props.yourFavoriteEvents,
  yourFavoriteVideos = props.yourFavoriteVideos,
  yourFavoriteExperts = props.yourFavoriteExperts,
  typeName = props.match.params.typeName;
  
  useEffect(() => {
    let favorites;
    console.log(typeName);
    if(typeName === 'posts'){
      favorites = yourFavoritePosts;
    }
    if(typeName === 'events'){
      favorites = yourFavoriteEvents;
    }
    if(typeName === 'tv_video'){
      favorites = yourFavoriteVideos;
    }
    if(typeName === 'users'){
      favorites = yourFavoriteExperts;
    }
    if(typeName)
    favorites && getYourFavoritesThunk(favorites, typeName)
  },[getYourFavoritesThunk, yourFavoritePosts, yourFavoriteEvents, yourFavoriteVideos, yourFavoriteExperts, typeName])
 
  return (
    <YourFavorites 
      yourFavoritesItems={props.yourFavoritesItems}
      yourFavoriteType={props.yourFavoriteType}
      yourFavoriteLoading={props.yourFavoriteLoading}
      userId={props.userId}
    />  
  )
}

let mapStateToProps = (state) => {
  return {
    yourFavoritesItems: getYourFavoritesItemsState(state),
    yourFavoriteType: getYourFavoritesTypeState(state),
    yourFavoritePosts: getFavoritesPost(state),
    yourFavoriteExperts: getFavoritesExperts(state),
    yourFavoriteVideos: getFavoritesVideos(state),
    yourFavoriteEvents: getFavoritesEvents(state),
    yourFavoriteLoading: getYourFavoritesLoadingState(state),
    userId: getUserId(state)
  }
}

export default compose(
  connect(mapStateToProps, {getYourFavoritesThunk}),
  withRouter,
)(YourFavoritesContainer);