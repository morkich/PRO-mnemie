import React from 'react';
import FilterTabItem from './FilterTabItem/FilterTabItem';
import style from './FilterTab.module.css';
import PreloaderMini from './../PreloaderMini/PreloaderMini';

const FilterTab = (props) => {  

  let catName = props.catName ? props.catName : 'posts';
  let filterReady = props.filterItems
    .map( (item, i) => <FilterTabItem to={`/${catName}?filter=${item.slug}`} catId={item.id} onClick={props.onClick} name={item.name} key={i}/> );    

  return (
    <div className="content_right-aside">
      <nav className={style.wrap}>
        {props.loading ? <PreloaderMini /> : null} 
        <ul>          
          <FilterTabItem to={`/${catName}?filter=all`} catId={props.parentCat} onClick={props.onClick} name='Все' key='999'/>
          {filterReady}        
        </ul>
      </nav>
    </div>    
  );
}


export default FilterTab; 