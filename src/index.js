import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import App from './components/App/App';

ReactDOM.render(
  <App store={configureStore(initialState)}/>,
  document.getElementById('root')
);
