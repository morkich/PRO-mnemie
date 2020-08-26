import React from 'react';
import style from './Content.module.css';
import { Route } from 'react-router-dom';
import Aside from './Aside/Aside';
import Account from './Account/Account';
import Main from './Main/Main';
import SearchData from './SearchData/SearchData';

const Content = (props) => {
  return (
    <div className="wrap_content container">
      <Route path="/search" render={() => <SearchData searchData={props.contentData.headerPage.search}/>} />
      <Route path="/home" render={() => <Main />} />
      <Route path="/account" render={() => <Account />} />
      <Aside />
    </div>
  );
}

export default Content;