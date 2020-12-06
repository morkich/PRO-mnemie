import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { compose } from 'redux';
import { getLogo } from '../../../redux/options-reducer';
import { connect } from 'react-redux';
import PreloaderMini from '../../common/PreloaderMini/PreloaderMini';
import style from './Logo.module.css';
import { getOptionsLogo } from '../../../redux/options-selectors';


const LogoContainer = (props) => {
  
  let getLogo = props.getLogo;
  let [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    getLogo();
    setLoadingState(false);
  }, [getLogo])

  return (
    <div className={style.wrap} >
      {loadingState ? <PreloaderMini /> : null}
      <Logo
        logo={props.logo}
      />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    logo: getOptionsLogo(state)
  }
}

export default compose(
  connect(mapStateToProps, { getLogo }),
)(LogoContainer);