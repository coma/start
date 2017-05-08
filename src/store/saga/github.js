import { takeLatest, call, put } from 'redux-saga/effects';
import { GITHUB_FETCH, GITHUB_FETCH_DONE } from '../action/github';
import api from 'src/api';

function* fetchGitHub ({payload: {name}}) {

    const response = yield call(api.search, name);

    yield put({
        type   : GITHUB_FETCH_DONE,
        payload: response.body
    });
}

export function* onGitHubFetch () {

    yield takeLatest(GITHUB_FETCH, fetchGitHub);
}
