import React from 'react';
import Repo from './repo';
import './style.css';

const List = ({items}) => (
    <ul className="list">
        { items.map(data => <Repo key={ data.id } { ...data } />) }
    </ul>
);

export default List;
