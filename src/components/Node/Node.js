import React from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import './Node.css';

const Node = ({ id, state, isRoot, addChild, remove, rename }) => (
  <li className="node">
    <div className="node__item">
      <Title className="node__title" changeHandler={event => rename(id, event.target.value)}>
        {state[id].title}
      </Title>
      <div className="node__buttons">
        <Button clickHandler={() => addChild(id)}>+</Button>
        {!isRoot && <Button clickHandler={() => remove(id)}>x</Button>}
      </div>
    </div>
    {state[id].nodes.length && (
      <ul className="node__list">
        {state[id].nodes.map(id => (
          <Node id={id} key={id} state={state} addChild={addChild} remove={remove} rename={rename} />
        ))}
      </ul>
    )}
  </li>
);

export default Node;
