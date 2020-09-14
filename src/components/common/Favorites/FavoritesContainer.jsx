import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteExpert, removeFavoriteExpert } from '../../../redux/auth-reducer';
import { toggleFavoriteProgress, favoriteThunkCreator } from '../../../redux/favorive-reducer';
import Favorites from './Favorites';

class FavoritesContainer extends React.Component {
  state = {
    favoriteExpertsButtonProgress: [], 
    favoriteExpertsState: []
  }

  componentDidMount() {
    this.props.toggleFavoriteProgress(true, this.props.expertId);
    let favorites = this.props.favoritesExperts.some(id => id === +this.props.expertId);
    favorites ? this.props.addFavoriteExpert() : this.props.removeFavoriteExpert();
    this.props.toggleFavoriteProgress(false, this.props.expertId);
  }

  removeThisFavorite = () => {
    this.props.favoriteThunkCreator(this.props.expertId, this.props.favoritesExperts, false);
  }
  addThisFavorite = () => {
    this.props.favoriteThunkCreator(this.props.expertId, this.props.favoritesExperts, true);
  }

  render() {
    return (
      <Favorites
        expertId={this.props.expertId}
        loggetIn={this.props.loggetIn}
        favoriteExpertsButtonProgress={this.props.favoriteExpertsButtonProgress}
        addThisFavorite={this.addThisFavorite}
        removeThisFavorite={this.removeThisFavorite}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    favoritesExperts: state.auth.favoritesExperts,
    favoriteExpertsButtonProgress: state.favorite.favoriteExpertsButtonProgress,
    loggetIn: state.auth.loggetIn
  }
}

export default connect(mapStateToProps,
  { addFavoriteExpert, removeFavoriteExpert, toggleFavoriteProgress, 
    favoriteThunkCreator }
)(FavoritesContainer);