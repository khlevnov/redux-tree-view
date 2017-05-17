import React from 'react';
import './Title.css';

const Title = ({ className, children, changeHandler }) => (
  <div className={'title ' + className}>
    <input className="title__input" type="text" value={children} onChange={changeHandler} />
  </div>
);

export default Title;
