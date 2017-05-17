import React from 'react';
import Button from '../Button/Button';
import './Node.css';

const Node = ({ title, isRoot, children }) => (
  <li className="node">
		<div className="node__item">
			<div className="node__title">{title}</div>
			<div className="node__buttons">
        <Button>+</Button>
        {!isRoot && <Button>x</Button>}
			</div>
		</div>
    {children && (
      <ul className="node__children">
        {children}
      </ul>
    )}
	</li>
);

export default Node;
