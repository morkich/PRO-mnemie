import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTagsDataThunk } from '../../../redux/tags-reducer';
import { getTagsData, getTagsLoading } from '../../../redux/tags-selectors';
import Tags from './Tags';

const TagsContainer = (props) => {

  let tagsList = props.tagsList,
  getTagsDataThunk = props.getTagsDataThunk;
  
  useEffect(() => {
   tagsList && getTagsDataThunk(tagsList);
  }, [tagsList, getTagsDataThunk])

  return (
    <Tags 
      tags={props.tags}
      loading={props.loading}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    tags: getTagsData(state),
    loading: getTagsLoading(state)
  }
}

export default connect(mapStateToProps,
  {getTagsDataThunk}
)(TagsContainer);