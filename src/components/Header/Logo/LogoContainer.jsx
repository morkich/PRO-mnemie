import React from 'react';
import Logo from './Logo';
import { compose } from 'redux';
import { getLogo } from '../../../redux/options-reducer';
import { connect } from 'react-redux';
import PreloaderMini from '../../common/PreloaderMini/PreloaderMini';
import style from './Logo.module.css';

class LogoContainer extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.getLogo();
    this.state.loading = false;
  }

  render() {
    return (
      <div className={style.wrap} >
        {this.state.loading ? <PreloaderMini /> : null}
        <Logo
          logo={this.props.logo}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    logo: state.options.logo
  }
}

export default compose(
  connect(mapStateToProps, { getLogo }),
)(LogoContainer);