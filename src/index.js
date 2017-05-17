import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App/App';

ReactDOM.render(
  <App store={configureStore()}/>,
  document.getElementById('root')
);
