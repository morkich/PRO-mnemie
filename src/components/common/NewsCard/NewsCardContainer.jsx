import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCareerThunk } from '../../../redux/career-reducer';
import { getCard } from '../../../redux/newsCard-selectors';
import NewsCard from './NewsCard';

const NewsCardContainer = (props) => {
 
  console.log(props);
  return (
    <NewsCard
      id={props.id}
      image={props.image}
      views={props.views}
      comment={props.comment}
    />
  )
}

let mapStateToProps = (state) => {  
  return {

  }
}
export default connect(mapStateToProps,
  {getCareerThunk}
)(NewsCardContainer);