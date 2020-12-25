import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAsideItemsThunk, setAsideType } from '../../../redux/aside-reducer';
import { getAsideItemsState, getAsideLoadingState } from '../../../redux/aside-selectors';
import AsideLoop from './AsideLoop';

const AsideLoopContainer = (props) => {

  let type = props.asideType,
  getAsideItemsThunk = props.getAsideItemsThunk;

  useEffect(() => {   
    type && getAsideItemsThunk(type); 
  }, [type, getAsideItemsThunk])

  return (
    <AsideLoop
      asideType={type}
      items={props.asideItems}
      asideLoading={props.asideLoading}
      title={props.title}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    asideItems: getAsideItemsState(state),
    asideLoading: getAsideLoadingState(state)
  }
}

export default connect(mapStateToProps, {getAsideItemsThunk, setAsideType})(AsideLoopContainer);