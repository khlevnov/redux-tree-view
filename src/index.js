import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App/App';

render(
  <App store={configureStore()} />,
  document.getElementById('root')
);
