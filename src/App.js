import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { Route } from 'react-router-dom';
import ExpertsContainer from './components/Experts/ExpertsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ModalContainer from './components/common/Modal/ModalContainer';
import AccountContainer from './components/Account/AccountContainer';

const App = () => {
  return (
    <div className="wrap_main">
      <header className="header">
        <Header />
      </header>
      <div className="content">
        <Route path="/experts" render={() => <ExpertsContainer />} />
        <Route path="/home" render={() => <Main />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />      
        <Route path="/account/" render={() => <AccountContainer />} />      
      </div>
      <Route path="/auth" render={() => <ModalContainer />} />   
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;