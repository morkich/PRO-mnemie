import React from 'react';
import FilterTabItem from './FilterTabItem/FilterTabItem';
import style from './FilterTab.module.css';
import PreloaderMini from './../PreloaderMini/PreloaderMini';

const FilterTab = (props) => {  
  console.log(props);
  let filterReady = props.filterItems
    .map( (item, i) => <FilterTabItem to={`/career?filter=${item.slug}`} catId={item.id} onClick={props.onClick} name={item.name} key={i}/> );    

  return (
    <div className="content_right-aside">
      <nav className={style.wrap}>
        {props.loading ? <PreloaderMini /> : null} 
        <ul>          
          <FilterTabItem to={`/career?filter=all`} catId={props.parentCat} onClick={props.onClick} name='Все' key='999'/>
          {filterReady}        
        </ul>
      </nav>
    </div>
    
    
  );
}


export default FilterTab; 