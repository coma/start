import { GITHUB_FETCH, GITHUB_FETCH_DONE } from '../action/github';
import { STATUS_NONE, STATUS_LOADING, STATUS_LOADED } from '../status';

export default (state = {status: STATUS_NONE}, {type, payload}) => {

    switch (type) {

    case GITHUB_FETCH:

        return {
            status: STATUS_LOADING
        };

    case GITHUB_FETCH_DONE:

        return {
            status: STATUS_LOADED,
            data  : payload
        };

    default:
        return state;
    }
}
