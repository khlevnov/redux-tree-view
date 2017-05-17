import React from 'react';
import './Button.css';

const Button = ({ text, className, children }) => (
  <a className={'button ' + className}>{children}</a>
);

export default Button;
