import React from 'react';
import './styles.css';

const Button = ({ text, className, children }) => (
  <a className={'button ' + className}>{children}</a>
);

export default Button;
