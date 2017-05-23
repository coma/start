import React from 'react';
import './style.css';

const Repo = ({full_name}) => (
    <li className="repo">{ full_name }</li>
);

export default Repo;
