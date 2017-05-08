import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

export default () => {

    const sagaMiddleware = createSagaMiddleware(),
          composed       = compose(applyMiddleware(sagaMiddleware)),
          create         = composed(createStore),
          store          = create(reducer);

    sagaMiddleware.run(saga);

    return store;
};
