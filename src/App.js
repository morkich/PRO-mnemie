import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Account from './components/Account/Account';
import { Route } from 'react-router-dom';
import ExpertsContainer from './components/Experts/ExpertsContainer';

const App = (props) => {
  return (
    <div className="wrap_main">
      <header className="header">
        <Header />
      </header>
      <div className="content">
        <Route path="/experts" render={() => <ExpertsContainer />} />
        <Route path="/home" render={() => <Main />} />
        <Route path="/account" render={() => <Account />} />      
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;