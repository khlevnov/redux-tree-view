import { createStore } from 'redux';
import node from '../reducers/node';

const configureStore = (initialState = {}) => {
    return createStore(
        node,
        initialState
    );
};

export default configureStore;
