import React from 'react';
import Button from '../Button';
import './styles.css';

const Node = ({ title, isRoot, children }) => (
  <li className="node">
		<div className="node__item">
			<div className="node__title">{title}</div>
			<div className="node__buttons">
        <Button className="node__add">+</Button>
        {!isRoot ? <Button className="node__remove">x</Button> : ''}
			</div>
		</div>
    {children &&
      <ul className="node__children">
        {children}
      </ul>
    }
	</li>
);

export default Node;
