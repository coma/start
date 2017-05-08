import React from 'react';
import classNames from 'classnames';
import './style.css';

const Input = ({className, ...props}) => (
    <input { ...props } className={ classNames('b-input', className) } />
);

export default Input;
