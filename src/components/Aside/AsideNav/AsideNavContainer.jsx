import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../../redux/auth-reducer';
import { getLoadingAcc, getLoggetIn } from '../../../redux/auth-selectors';
import AsideNav from './AsideNav';
import style from './AsideNav.module.css';

class AsideNavContainer extends React.Component {
 
  componentDidMount() {
  }

  logOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    this.props.setUserData({ loggetIn: false });    
  };

  render() {
    return (
      <nav className={style.container}>
        <AsideNav
          logOut={this.logOut}
        />
      </nav>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    loggetIn: getLoggetIn(state),
    loadingAcc: getLoadingAcc(state)
  }
}
export default connect(mapStateToProps, 
  {setUserData})
  (AsideNavContainer);