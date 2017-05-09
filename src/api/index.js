import request from 'superagent';
import search from './search';

export const root = 'https://api.github.com';

export const url = path => `${ root }/${ path.replace(/^\/|\/$/g, '') }`;

export default {
    search: search(request, url)
};
