import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEventsDataThunk } from '../../redux/eventLoop-reducer';
import { getEventLoopItemsState, getEventLoopLoadingState } from '../../redux/eventLoop-selectors';
import EventLoop from './EventLoop';


const EventLoopContainer = (props) => {
  
  let getEventsDataThunk = props.getEventsDataThunk;

  useEffect(() => {
    getEventsDataThunk();
  }, [getEventsDataThunk])

  return (
    <EventLoop
      items={props.eventLoopItems}
      eventLoading={props.eventLoopLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    eventLoopLoading: getEventLoopLoadingState(state),
    eventLoopItems: getEventLoopItemsState(state)
  }
}

export default connect(mapStateToProps,
  {getEventsDataThunk}
)(EventLoopContainer);