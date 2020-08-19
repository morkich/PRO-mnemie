import React from 'react';
import style from './Content.module.css';
import { Route } from 'react-router-dom';
import Aside from './Aside/Aside';
import Account from './Account/Account';
import Main from './Main/Main';

const Content = () => {
  return (
    <div className="wrap_content container">
      <Route path="/home" component={Main} />
      <Route path="/account" component={Account} />
      <Aside />
    </div>
  );
}

export default Content;