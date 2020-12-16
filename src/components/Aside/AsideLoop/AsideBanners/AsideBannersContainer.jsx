import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAsideBannersLoading } from '../../../../redux/asideBanner-reducer';
import { getAsideBannersItemsState, getAsideBannersLoadingState } from '../../../../redux/asideBanner-selectors';
import AsideBanners from './AsideBanners';

const AsideBannersContainer = (props) => {
  
  let asideType = props.asideType,
  getAsideBannersLoading = props.getAsideBannersLoading;
  
  useEffect(() => {
    asideType && getAsideBannersLoading();
  }, [asideType, getAsideBannersLoading])

  

  return (
    <AsideBanners  
      asideBannerItems={props.asideBannerItems}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    asideBannerItems: getAsideBannersItemsState(state),
    asideBannerLoading: getAsideBannersLoadingState(state)
  }
}

export default connect(mapStateToProps, {getAsideBannersLoading})(AsideBannersContainer);