import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUpComingEventsThunk } from '../../../redux/upComingEvents-reducer';
import { getUpComingEventsLoadingState, getUpComingEventsNumberState, getUpComingEventsState } from '../../../redux/upComingEvents-selectors';
import Preloader from '../../common/Preloader/Preloader';
import UpComingEvents from './UpComingEvents';


const UpComingEventsContainer = ({numberUpcomingEvent, getUpComingEventsThunk, itemsEvents, comingLoading}) => {

  useEffect(() => {
    numberUpcomingEvent && getUpComingEventsThunk(numberUpcomingEvent, 'events')
  }, [numberUpcomingEvent, getUpComingEventsThunk])


  return (
    <>
      {comingLoading ? <Preloader /> : null}
      <UpComingEvents 
        itemsEvents={itemsEvents}
        loading={comingLoading}
      />
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    numberEvent: getUpComingEventsNumberState(state),
    itemsEvents: getUpComingEventsState(state),
    comingLoading: getUpComingEventsLoadingState(state)
  }
}
export default 
  connect(
    mapStateToProps, {getUpComingEventsThunk})
    (UpComingEventsContainer);