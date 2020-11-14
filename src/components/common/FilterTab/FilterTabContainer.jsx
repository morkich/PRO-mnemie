import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilterItemsThunk, setFilterQueryThunk } from '../../../redux/filters-reducer';
import { getfiltersItems, getfilterTabQuery, getLoading } from '../../../redux/filters-selectors';
import FilterTab from './FilterTab';

const FilterTabContainer = (props) => {

  useEffect(() => {
    props.setFilterItemsThunk(props.parentCat);
  }, [props.parentCat])

  const changeFilter = (event) => {
    props.setFilterQueryThunk(event.target.dataset.catid);          
  }

  return (
    <FilterTab
      filterItems={props.filterItems}
      filterQuery={props.filterQuery}
      onClick={changeFilter}
      parentCat={props.parentCat}
      loading={props.loading}
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