import React, { Component } from 'react';
import Node from './components/Node';

const App = () => {
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
}

export default App;
