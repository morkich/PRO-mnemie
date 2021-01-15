import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAddPostTags } from '../../../../redux/addNewPost-reducer';
import { setAddVideoTags } from '../../../../redux/addNewVideo-reducer';
import { getAllTagsThunk, postNewTagThunk, postOldTagThunk, removePostTagThunk, setAddTagsItems } from '../../../../redux/addTags-reducer';
import { getAddTagsItemsState, getAddTagsLoadingState, getAllTagsItemsState, getInputsTagsReadyState } from '../../../../redux/addTags-selectors';
import AddTags from './AddTags';

const AddTagsContainer = (props) => {
  let getAllTagsThunk = props.getAllTagsThunk,
  inputTagsIdReady = props.inputTagsIdReady,
  setAddPostTags = props.setAddPostTags,
  setAddVideoTags = props.setAddVideoTags,
  startTags = props.startTags ? props.startTags : [],
  allTagsItems = props.allTagsItems,
  tagsType = props.tagsType,
  setAddTagsItems = props.setAddTagsItems;
  
  useEffect(() => {
    getAllTagsThunk(tagsType);
  }, [getAllTagsThunk, tagsType])

  useEffect(() => {
    if(startTags.length >= 1 ){
      let tagItems = allTagsItems.filter( v => startTags.some( v2 => v.id === v2 && v));
      startTags && setAddTagsItems(tagItems);
    }
  }, [startTags, allTagsItems, setAddTagsItems])

  useEffect(() => {
    if(tagsType === 'tv_video_tags') {
      inputTagsIdReady && setAddVideoTags(inputTagsIdReady);
    }else{
      inputTagsIdReady && setAddPostTags(inputTagsIdReady);
    }   
  }, [inputTagsIdReady, setAddPostTags, setAddVideoTags, tagsType])

  const writeTag = (event) => {
    if(event.target.value.includes(',')){
      let tagName = event.target.value.replace(/[,]/g, '').toLowerCase();      
      let oldTag = props.allTagsItems.filter(tag => tag.name === tagName);
      oldTag.length >= 1 ? props.postOldTagThunk(oldTag[0]): props.postNewTagThunk(tagName, tagsType);
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

export default  connect(mapStateToProps, {getAllTagsThunk, postOldTagThunk, postNewTagThunk, setAddPostTags, setAddVideoTags, removePostTagThunk, setAddTagsItems})
(AddTagsContainer);