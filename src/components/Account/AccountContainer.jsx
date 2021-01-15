import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Account from './Account';
import { toggleisLoading } from '../../redux/profile-reducer';
import { setAccauntData } from '../../redux/auth-reducer';
import { getRaiting, getUserId, getLoadingAcc, getDiscription, getExpirience, getPosition, getCity, getWorkplace, getAvatar, getFirstname, getLastname, getSecondname } from '../../redux/auth-selectors';

const AccountContainer = (props) => {
  const onFormSubmit = (formData) => {
    props.setAccauntData(formData);
  }

  return (
    <>
      {props.isLoading ? <Preloader /> : null}
      <Account
        {...props}
        onFormSubmit={onFormSubmit}
        accountFormData={{
          discription: props.discription,
          expirience: props.expirience,
          position: props.position,
          city: props.city,      
          workplace: props.workplace,      
        }}        
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    loadingAcc: getLoadingAcc(state),
    userId: getUserId(state),
    avatar: getAvatar(state),
    firstname: getFirstname(state),
    secondname: getSecondname(state),
    lastname: getLastname(state),
    discription: getDiscription(state),
    expirience: getExpirience(state),
    position: getPosition(state),
    city: getCity(state),      
    workplace: getWorkplace(state),   
    raiting: getRaiting(state),   
  }
}

export default compose(
  connect(mapStateToProps, { toggleisLoading, setAccauntData }),
  withRouter,
  withAuthRedirect
)(AccountContainer);