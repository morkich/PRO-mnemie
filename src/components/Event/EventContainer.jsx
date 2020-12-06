import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getEventDataThunk } from '../../redux/event-reducer';
import { getEventDataState, getEventLoadingState } from '../../redux/event-selectors';
import Event from './Event'



const EventContainer = (props) => {
  let eventId = props.match.params.eventId;
  let getEventDataThunk = props.getEventDataThunk;

  useEffect(() => {
    eventId && getEventDataThunk(eventId);
  }, [eventId, getEventDataThunk])

  return (
    <Event
      eventData={props.eventData}
      eventLoading={props.eventLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    eventData: getEventDataState(state),
    eventLoading: getEventLoadingState(state)
  }
}

export default compose(connect(mapStateToProps,
  {getEventDataThunk} ),
  withRouter,
)(EventContainer);