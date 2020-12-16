import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import YourData from './YourData';
import { getYourDataThunk } from '../../../redux/yourData-reducer';
import { getYourDataItemsState, getYourDataLoadingState } from '../../../redux/yourData-selectors';

const YourDataContainer = (props) => {
  let dataType = props.match.params.dataType,
  userId = props.match.params.userId,
  getYourDataThunk = props.getYourDataThunk;

  useEffect(() => {
    dataType && getYourDataThunk(dataType, userId);
  }, [dataType]);

  let title = 'Ваши Сохраненные элементы';
  if(dataType === 'posts') {
    title = 'Ваши Статьи';
  }
  if(dataType === 'videos') {
    title = 'Ваши Видео';
  }
 
  return (
    <YourData 
      title={title}
      dataType={dataType}
      userId={userId}
      dataItems={props.dataItems}
      dataLoading={props.dataLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    dataItems: getYourDataItemsState(state),
    dataLoading: getYourDataLoadingState(state)
  }
}

export default compose(
  connect(mapStateToProps, {getYourDataThunk}),
  withRouter,
)(YourDataContainer);