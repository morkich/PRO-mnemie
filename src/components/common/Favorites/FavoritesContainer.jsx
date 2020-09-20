import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteExpert, removeFavoriteExpert } from '../../../redux/auth-reducer';
import { getFavoritesExperts, getLoggetIn } from '../../../redux/auth-selectors';
import { toggleFavoriteProgress, favoriteThunkCreator } from '../../../redux/favorive-reducer';
import Favorites from './Favorites';

class FavoritesContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFavoriteProgress(true, this.props.expertId);
    let favorites = this.props.favoriteExpertsState.some(id => id === +this.props.expertId);
    favorites ? this.props.addFavoriteExpert() : this.props.removeFavoriteExpert();
    this.props.toggleFavoriteProgress(false, this.props.expertId);
  }

  removeThisFavorite = () => {
    this.props.favoriteThunkCreator(this.props.expertId, this.props.favoriteExpertsState, false);
  }
  addThisFavorite = () => {
    this.props.favoriteThunkCreator(this.props.expertId, this.props.favoriteExpertsState, true);
  }

  render() {
    return (
      <Favorites
        expertId={this.props.expertId}
        loggetIn={this.props.loggetIn}
        favoriteExpertsButtonProgress={this.props.favoriteExpertsButtonProgress}
        favoriteExpertsState={this.props.favoriteExpertsState}
        addThisFavorite={this.addThisFavorite}
        removeThisFavorite={this.removeThisFavorite}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    favoriteExpertsState: getFavoritesExperts(state),
    favoriteExpertsButtonProgress: state.favorite.favoriteExpertsButtonProgress,
    loggetIn: getLoggetIn(state)
  }
}

export default connect(mapStateToProps,
  { addFavoriteExpert, removeFavoriteExpert, toggleFavoriteProgress, 
    favoriteThunkCreator }
)(FavoritesContainer);