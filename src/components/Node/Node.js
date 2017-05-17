import React from 'react';
import Button from '../Button/Button';
import './Node.css';

const Node = ({ id, state, isRoot, addChild, remove }) => (
  <li className="node">
    <div className="node__item">
      <div className="node__title">{state[id].title}</div>
      <div className="node__buttons">
        <Button clickHandler={() => addChild(id)}>+</Button>
        {!isRoot && <Button clickHandler={() => remove(id)}>x</Button>}
      </div>
    </div>
    {state[id].nodes.length && (
      <ul className="node__list">
        {state[id].nodes.map(id => (
          <Node id={id} key={id} state={state} addChild={addChild} remove={remove} />
        ))}
      </ul>
    )}
  </li>
);

export default Node;
