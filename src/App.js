import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = (props) => {
  return (
      <div className="wrap_main">
        <header className="header">
          <Header headerData={props.store.headerPage} userData={props.store.user} logIn={props.logIn}/>
        </header>
        <div className="content">
          <Content />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
  );
}

export default App;