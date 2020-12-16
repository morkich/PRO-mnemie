import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAddPostTags } from '../../../../redux/addNewPost-reducer';
import { getAllTagsThunk, postNewTagThunk, postOldTagThunk, removePostTagThunk, setAddTagsItems } from '../../../../redux/addTags-reducer';
import { getAddTagsItemsState, getAddTagsLoadingState, getAllTagsItemsState, getInputsTagsReadyState } from '../../../../redux/addTags-selectors';
import AddTags from './AddTags';

const AddTagsContainer = (props) => {
  let getAllTagsThunk = props.getAllTagsThunk,
  inputTagsIdReady = props.inputTagsIdReady,
  setAddPostTags = props.setAddPostTags,
  startTags = props.startTags,
  allTagsItems = props.allTagsItems;
  
  useEffect(() => {
    getAllTagsThunk();
  }, [getAllTagsThunk])

  useEffect(() => {
    if(startTags.length >= 1 ){
      let tagItems = props.allTagsItems.filter( v => props.startTags.some( v2 => v.id === v2 && v));
      startTags && props.setAddTagsItems(tagItems);
    }
  }, [startTags, allTagsItems])

  useEffect(() => {
    inputTagsIdReady && setAddPostTags(inputTagsIdReady);
  }, [inputTagsIdReady, setAddPostTags])

  const writeTag = (event) => {
    if(event.target.value.includes(',')){
      let tagName = event.target.value.replace(/[,]/g, '').toLowerCase();      
      let oldTag = props.allTagsItems.filter(tag => tag.name === tagName);
      oldTag.length >= 1 ? props.postOldTagThunk(oldTag[0]): props.postNewTagThunk(tagName);
      event.target.value = '';
    }
  }

  const deleteTag = (event) => {
    console.log(event.target.id);    
    props.removePostTagThunk(event.target.id);
  }

  return (
    <AddTags 
      allTags={props.allTagsItems}
      addTagsItems={props.addTagsItems}
      writeTag={writeTag}
      tagsReady={inputTagsIdReady}
      addTagsLoading={props.addTagsLoading}
      deleteTag={deleteTag}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    addTagsItems: getAddTagsItemsState(state),
    allTagsItems: getAllTagsItemsState(state),
    inputTagsIdReady: getInputsTagsReadyState(state),
    addTagsLoading: getAddTagsLoadingState(state)
  }
}

export default  connect(mapStateToProps, {getAllTagsThunk, postOldTagThunk, postNewTagThunk, setAddPostTags, removePostTagThunk, setAddTagsItems})
(AddTagsContainer);