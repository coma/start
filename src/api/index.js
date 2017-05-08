import request from 'superagent';

const root = 'https://api.github.com',
      url  = path => `${ root }/${ path.replace(/^\/|\/$/g, '') }`;

const search = q => request
  .get(url('search/repositories'))
  .query({q});

export default {search};
