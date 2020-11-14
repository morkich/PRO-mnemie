import React, { useEffect } from 'react';
import Menu from './Menu';
import { connect } from 'react-redux';
import { getLoadingMenuState, getMenuState } from '../../../redux/menu-selectors';
import { setMenuThunk } from '../../../redux/menu-reducer';

const MenuContainer = (props) => {
  useEffect(() => {    
    props.setMenuThunk();
  }, [])
  
  return (
    <Menu 
      menuData={props.menuData}
    />
  )
}


let mapStateToProps = (state) => {
  return {
    menuData: getMenuState(state),
    nemuLoading: getLoadingMenuState(state)
  }
}


export default connect(mapStateToProps, 
  {setMenuThunk}
)(MenuContainer);
