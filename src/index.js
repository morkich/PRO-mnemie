import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './elements.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

export let renderAllThree = (store) => {
  debugger;
  ReactDOM.render(    
    <React.StrictMode>
      <BrowserRouter>        
        <App store={store.getState()} logIn={store.logIn.bind(store)} />        
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') 
  );
}

store.subscribe(renderAllThree);
store.renderAllThree(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();