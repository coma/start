import { combineReducers } from 'redux';
import { CLEAR } from '../action/store';
import github from './github';

const reduce = combineReducers({
    github
});

export default (state, action) => {

    if (action.type === CLEAR) {

        state = undefined;
    }

    return reduce(state, action);
};
