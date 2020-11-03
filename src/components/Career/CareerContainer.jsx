import React from 'react';
import { connect } from 'react-redux';
import Career from './Career';

class CareerContainer extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <Career
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
  }
}

export default connect(mapStateToProps,
  {}
)(CareerContainer);