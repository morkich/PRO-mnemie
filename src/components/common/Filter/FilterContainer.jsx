import React from 'react';
import { connect } from 'react-redux';
import { getUniqUserCities } from '../../../redux/experts-reducer';
import FilterReduxForm from './Filter';

class FilterContainer extends React.Component {

  componentDidMount() {
    this.props.getUniqUserCities();
  }

  componentDidUpdate(prevState) {
  }
  
  onFormSubmit = (formData) => {
    console.log(formData);
  };  

  render() {
    return (
      <FilterReduxForm 
        onSubmit={this.onFormSubmit}
        uniqCities={this.props.uniqCities}
        datalistFunc={this.dataList}
      />        
    )    
  }
}

let mapStateToProps = (state) => {
  return {
    experts: state.expertsPage.experts,
    uniqCities: state.expertsPage.uniqCities
  }
}

export default connect(mapStateToProps, {getUniqUserCities})(FilterContainer);