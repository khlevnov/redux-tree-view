import React from 'react';
import { Provider } from 'react-redux';
import Node from '../../containers/Node/Node';

const App = ({ store }) => (
  <Provider store={store}>
    <ul>
      <Node id={1} isRoot />
    </ul>
  </Provider>
);

export default App;
