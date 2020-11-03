import React from 'react';
import { connect } from 'react-redux';
import { getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator } from '../../../redux/experts-reducer';
import { getExpertsState, getUniqCitiesState } from '../../../redux/experts-selectors';
import FilterReduxForm from './Filter';

class FilterContainer extends React.Component {

  componentDidMount() {
    this.props.getUniqUserCities();
  }

  onFormSubmit = (formData) => {    
    if(formData){
      this.props.getFilterExpertThunk(formData.filter_city, formData.filter_name);
    } else {
      this.props.getExpertsThunkCreator();
    }
  };  

  render() {
    return (
      <FilterReduxForm 
        onSubmit={this.onFormSubmit}
        uniqCities={this.props.uniqCities}
        changeInput={this.changeInput}
        datalistFunc={this.dataList}
      />        
    )    
  }
}

let mapStateToProps = (state) => {
  return {
    experts: getExpertsState(state),
    uniqCities: getUniqCitiesState(state)    
  }
}

export default connect(mapStateToProps, {getUniqUserCities, getFilterExpertThunk, getExpertsThunkCreator})(FilterContainer);