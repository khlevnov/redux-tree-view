import React from 'react';
import './Button.css';

const Button = ({ text, children, clickHandler }) => (
  <span className="button" onClick={clickHandler}>{children}</span>
);

export default Button;
