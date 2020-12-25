import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ProfileData from './ProfileData';
import { getProfileDataItemsState, getProfileDataLoadingState, getProfileDataExpertName, getProfileDataItemsCount} from '../../../redux/profileData-selectors';
import { getProfileDataStateThunk } from '../../../redux/profileData-reducer';

const ProfileDataContainer = (props) => {  
  console.log(props);

  let userId = props.match.params.profileId,
  dataName = props.match.params.dataName,
  getProfileDataStateThunk = props.getProfileDataStateThunk;
  
  useEffect(() => {
    userId && getProfileDataStateThunk(userId, dataName);
  }, [userId, dataName])

  return (
    <ProfileData 
      dataItems={props.dataItems}
      dataName={dataName}
      dataItemsCount={props.dataItemsCount}
      dataExpertName={props.dataExpertName}
      dataLoading={props.dataLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    dataItems: getProfileDataItemsState(state),
    dataItemsCount: getProfileDataItemsCount(state),
    dataExpertName: getProfileDataExpertName(state),
    dataLoading: getProfileDataLoadingState(state)
  }
}

export default compose(
  connect(mapStateToProps, {getProfileDataStateThunk}),
  withRouter,
)(ProfileDataContainer);