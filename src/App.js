import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = (props) => {
  return (
      <div className="wrap_main">
        <header className="header">
          <Header headerData={props.state.headerPage} userData={props.state.user} dispatch={props.dispatch}/>
        </header>
        <div className="content">
          <Content contentData={props.state}/>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
  );
}

export default App;