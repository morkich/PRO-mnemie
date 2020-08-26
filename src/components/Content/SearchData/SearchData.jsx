import React from 'react';
import style from './SearchData.module.css';


const SearchData = (props) => {
  return (
    <div>
      {props.searchData.searchText}
    </div>
  )
}

export default SearchData;