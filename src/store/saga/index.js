import { all } from 'redux-saga/effects';
import { onGitHubFetch } from './github';

export default function* () {

    yield all([
        onGitHubFetch()
    ]);
}
