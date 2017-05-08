import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import View from 'src/view';
import store from './store';
import './style.css';

const Root = () => (
    <Provider store={ store }>
        <View />
    </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
