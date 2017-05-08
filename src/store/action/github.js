export const GITHUB_FETCH      = '@@app/GITHUB_FETCH',
             GITHUB_FETCH_DONE = '@@app/GITHUB_FETCH_DONE';

export const fetchGitHub = name => ({
    type   : GITHUB_FETCH,
    payload: {name}
});
