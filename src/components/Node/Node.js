import React from 'react';
import Button from '../Button/Button';
import './Node.css';

const Node = ({ id, state, isRoot, addChild, remove }) => (
  <li className="node">
    <div className="node__item">
      <div className="node__title">{state[id].title}</div>
      <div className="node__buttons">
        <Button onClick={addChild(id)}>+</Button>
        {!isRoot && <Button onClick={remove(id)}>x</Button>}
      </div>
    </div>
    {state[id].nodes.length && (
      <ul className="node__nodes">
        {state[id].nodes.map(id => (
          <Node id={id} key={id} state={state} />
        ))}
      </ul>
    )}
  </li>
);

export default Node;
