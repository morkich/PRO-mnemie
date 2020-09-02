import React from 'react';
import { connect } from 'react-redux';
import { addFavorives, removeFavorites, setExperts, setCurrentPage, setTotalPageCount, toggleisLoading } from '../../redux/experts-reducer';
import * as axios from 'axios';
import Experts from './Experts';

class ExpertsContainer extends React.Component {

  componentDidMount() {
    const pageSize = this.props.pageSize;
    this.props.toggleisLoading(true);
    axios.get(`http://proview.loc/wp-json/wp/v2/users?page=${this.props.currentPage}&per_page=${pageSize}`)
      .then(response => {
        this.props.toggleisLoading(false);
        this.props.setExperts(response.data);
        this.props.setTotalPageCount(response.headers['x-wp-totalpages']);
      });
  }

  onPageChange = (numberPage) => {
    const pageSize = this.props.pageSize;
    this.props.toggleisLoading(true);
    this.props.setCurrentPage(numberPage);
    axios.get(`http://proview.loc/wp-json/wp/v2/users?page=${numberPage}&per_page=${pageSize}`)
      .then(response => {
        this.props.toggleisLoading(false);
        this.props.setExperts(response.data)
      });
  }

  render() {
    return (
      <Experts
        totalPageCount={this.props.totalPageCount}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        removeFavorites={this.props.removeFavorites}
        addFavorives={this.props.addFavorives}
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
  {addFavorives, removeFavorites, setExperts, setCurrentPage, setTotalPageCount, toggleisLoading}
  )(ExpertsContainer);