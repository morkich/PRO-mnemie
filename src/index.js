import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './elements.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

export let rerenderEntireThree = (state) => {
  ReactDOM.render(    
    <React.StrictMode>
      <BrowserRouter>        
        <App state={state} dispatch={store.dispatch.bind(store)} />        
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root') 
  );
}

rerenderEntireThree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  rerenderEntireThree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();