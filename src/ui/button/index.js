import React from 'react';
import classNames from 'classnames';
import './style.css';

const Button = ({className, children, ...props}) => (
    <button { ...props } className={ classNames('b-button', className) }>
        { children }
    </button>
);

export default Button;
