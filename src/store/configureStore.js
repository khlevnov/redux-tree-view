import { createStore } from 'redux';
import node from '../reducers/node';
import initialState from './initialState';
import { loadState, persistState } from './localStorage';

const configureStore = () => {
  const defaultState = loadState() || initialState;
  const store = createStore(
    node,
    defaultState
  );

  store.subscribe(() => {
    persistState(store.getState());
  });

  return store;
};

export default configureStore;
