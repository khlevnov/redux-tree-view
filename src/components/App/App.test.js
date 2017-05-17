import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../../store/configureStore';
import App from './App';

it('renders without crashing', () => {
  ReactDOM.render(
    <App store={configureStore()}/>,
    document.createElement('div')
  );
});
