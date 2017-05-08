import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';
import state from './state.json';

export default () => {

    const sagaMiddleware = createSagaMiddleware(),
          devTools       = window.devToolsExtension ? window.devToolsExtension() : f => f,
          composed       = compose(applyMiddleware(sagaMiddleware), devTools),
          create         = composed(createStore),
          store          = create(reducer, state);

    sagaMiddleware.run(saga);

    if (module.hot) {

        module
            .hot
            .accept('./reducer', () => store.replaceReducer(require('./reducer').default));
    }

    return store;
};
