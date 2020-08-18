import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="main">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;