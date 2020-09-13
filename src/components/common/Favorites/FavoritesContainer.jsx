import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteExpert, removeFavoriteExpert } from '../../../redux/auth-reducer';
import { toggleFavoriteProgress, favoriteThunkCreator, unfavoriteThunkCreator } from '../../../redux/favorive-reducer';
import Favorites from './Favorites';


class FavoritesContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFavoriteProgress(true, this.props.expertId);
    let favorites = this.props.favoritesExperts.some(id => id === +this.props.expertId);
    favorites ? this.props.addFavoriteExpert() : this.props.removeFavoriteExpert();
    this.props.toggleFavoriteProgress(false, this.props.expertId);
  }

  removeThisFavorite = () => {
    this.props.unfavoriteThunkCreator(this.props.expertId, this.props.favoritesExperts);
  }
  addThisFavorite = () => {
    this.props.favoriteThunkCreator(this.props.expertId, this.props.favoritesExperts);
  }

  render() {
    return (
      <Favorites
        expertId={this.props.expertId}
        favoriteExpertsButtonProgress={this.props.favoriteExpertsButtonProgress}
        favoriteExpertsState={this.props.favoritesExperts}
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
  }
}

export default connect(mapStateToProps,
  { addFavoriteExpert, removeFavoriteExpert, toggleFavoriteProgress, 
    favoriteThunkCreator, unfavoriteThunkCreator }
)(FavoritesContainer);