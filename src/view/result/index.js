import React from 'react';
import { connect } from 'react-redux';
import views from './views';
import './style.css';

const Result = ({View, data}) => (
    <div className="result">
        <View { ...data } />
    </div>
);

const mapState = ({github: {status, data}}) => ({
    View: views[status] || (() => false),
    data
});

export default connect(mapState)(Result);
