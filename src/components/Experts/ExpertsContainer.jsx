import React from 'react';
import { connect } from 'react-redux';
import { getExpertsThunkCreator } from '../../redux/experts-reducer';
import Experts from './Experts';


class ExpertsContainer extends React.Component {

  componentDidMount() {
    this.props.getExpertsThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (numberPage) => {
    this.props.getExpertsThunkCreator(numberPage, this.props.pageSize);
  }

  render() {
    return (
      <Experts
        totalPageCount={this.props.totalPageCount}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        experts={this.props.experts}
        isLoading={this.props.isLoading}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    experts: state.expertsPage.experts,
    pageSize: state.expertsPage.pageSize,
    totalPageCount: state.expertsPage.totalPageCount,
    currentPage: state.expertsPage.currentPage,
    isLoading: state.expertsPage.isLoading,
  }
}

export default connect(mapStateToProps,
  { getExpertsThunkCreator }
)(ExpertsContainer);