import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterItemsThunk, setFilterQueryThunk } from '../../../redux/filters-reducer';
import { getfiltersItems, getfilterTabQuery, getLoading } from '../../../redux/filters-selectors';
import FilterTab from './FilterTab';

const FilterTabContainer = (props) => {
  
  let parentCat = props.parentCat;
  let setFilterItemsThunk =  props.setFilterItemsThunk;
  let cats = props.catName ? props.catName : 'categories';

  useEffect(() => {
    parentCat && setFilterItemsThunk(parentCat, cats);
  }, [parentCat, cats, setFilterItemsThunk])

  const changeFilter = (event) => {
    props.setFilterQueryThunk(event.target.dataset.catid, cats);    
  }

  return (
    <FilterTab
      filterItems={props.filterItems}
      filterQuery={props.filterQuery}
      onClick={changeFilter}
      parentCat={props.parentCat}
      loading={props.loading}
      catName={props.catName}
    />  
  )
}

let mapStateToProps = (state) => {
  return {    
    filterItems: getfiltersItems(state),
    filterQuery: getfilterTabQuery(state),
    loading:     getLoading(state)
  }
}

export default connect(mapStateToProps, {setFilterItemsThunk, setFilterQueryThunk})(FilterTabContainer);