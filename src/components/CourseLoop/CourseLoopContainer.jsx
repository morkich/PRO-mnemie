import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCourseDataThunk } from '../../redux/courseLoop-reducer';
import { getCourseLoopItemsState, getCourseLoopLoadingState } from '../../redux/courseLoop-selectors';
import CourseLoop from './CourseLoop';


const CourseLoopContainer = (props) => {

  let getCourseDataThunk = props.getCourseDataThunk;

  useEffect(() => {
    getCourseDataThunk('courses');
  }, [getCourseDataThunk])

  return (
    <CourseLoop
      items={props.courseLoopItems}
      courseLoading={props.courseLoopLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    courseLoopLoading: getCourseLoopLoadingState(state),
    courseLoopItems: getCourseLoopItemsState(state)
  }
}

export default connect(mapStateToProps,
  {getCourseDataThunk}
)(CourseLoopContainer);