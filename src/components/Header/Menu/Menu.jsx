import React from 'react';
import style from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  console.log(props);
  let menuReady = props.menuData.map( (item, i) => {

    let link = '/';
    if(item.type == 'taxonomy') {
      link = `/posts/${item.object_id}`;
    }
    if (item.type == 'custom'){
      link = `${item.url}`;  
    }    
    
    return <MenuItem to={link} name={item.title} key={i}/>
  });

  return (
    <nav className={style.top_menu}>
      <ul>
        {menuReady}
      </ul>
    </nav>
  );
}

export default Menu; 