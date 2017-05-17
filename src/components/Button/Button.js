import React from 'react';
import './Button.css';

const Button = ({ text, children }) => (
  <a className="button">{children}</a>
);

export default Button;
