import React from 'react';
import { Provider } from 'react-redux';
import Node from '../Node/Node';

const App = ({ store }) => (
  <Provider store={store}>
    <ul>
      <Node title="Element 1" isRoot>
        <Node title="Element 2" />
        <Node title="Element 3">
          <Node title="Element 5" />
          <Node title="Element 6" />
        </Node>
        <Node title="Element 4" />
      </Node>
    </ul>
  </Provider>
);

export default App;
