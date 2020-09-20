import React from 'react';
import { connect } from 'react-redux';
import AsideTV from './AsideTV';

class AsideTVContainer extends React.Component {

  componentDidMount() {
  }
  
  render() {
    return (
      <AsideTV />
    )
  }
}

let mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {})(AsideTVContainer);