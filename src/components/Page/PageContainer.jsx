import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Page from './Page';
import { getPageContentState, getPageLoadingState, getPageNameState } from '../../redux/page-selectors';
import { getPageDataThunk } from '../../redux/page-reducer';

const PageContainer = (props) => {

  let pageSlug = props.match.params.pageSlug,
  getPageDataThunk = props.getPageDataThunk;


  useEffect( () => {    
    pageSlug && getPageDataThunk(pageSlug);
  }, [pageSlug, getPageDataThunk]);

  return (
    <Page
      slug={pageSlug}
      content={props.pageContent[0] ? props.pageContent[0].content.rendered : 'Загрузка'}
      title={props.pageContent[0] ? props.pageContent[0].title.rendered : 'Загрузка'}
      pageLoading={props.pageLoading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    pageSlug: getPageNameState(state),
    pageContent: getPageContentState(state),
    pageLoading: getPageLoadingState(state)
  }
}
export default 
  compose(connect(
    mapStateToProps, 
    {getPageDataThunk}),
  withRouter,
)(PageContainer);