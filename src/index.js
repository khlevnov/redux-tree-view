import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import initialState from './store/initialState';
import { loadState, persistState } from './store/localStorage';
import App from './components/App/App';

const store = configureStore(loadState() || initialState);

store.subscribe(() => {
  persistState(store.getState());
});

render(
  <App store={store} />,
  document.getElementById('root')
);
