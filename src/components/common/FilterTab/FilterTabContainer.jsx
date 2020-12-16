import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterItemsThunk, setFilterQueryThunk } from '../../../redux/filters-reducer';
import { getfiltersItems, getfilterTabQuery, getFilterLoading } from '../../../redux/filters-selectors';
import FilterTab from './FilterTab';

const FilterTabContainer = (props) => {
  
  let parentCat = props.parentCat;
  let setFilterItemsThunk =  props.setFilterItemsThunk;
  let cats = props.catName ? props.catName : 'categories';

  useEffect(() => {
    parentCat && setFilterItemsThunk(parentCat, cats);
  }, [parentCat, cats, setFilterItemsThunk])

  const changeFilter = (event) => {
    console.log(event.target.dataset.catid);
    console.log(cats);
    props.setFilterQueryThunk(event.target.dataset.catid, cats);    
  }

  return (
    <FilterTab
      filterItems={props.filterItems}
      filterQuery={props.filterQuery}
      onClick={changeFilter}
      parentCat={props.parentCat}
      filterLoading={props.filterLoading}
      catName={props.catName}
    />  
  )
}

let mapStateToProps = (state) => {
  return {    
    filterItems: getfiltersItems(state),
    filterQuery: getfilterTabQuery(state),
    filterLoading: getFilterLoading(state)
  }
}

export default connect(mapStateToProps, {setFilterItemsThunk, setFilterQueryThunk})(FilterTabContainer);