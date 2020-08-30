import React from 'react';
import Menu from './Menu';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    menuData: state.headerPage.topMenu
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
 
  }  
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer; 