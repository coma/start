export const path = 'search/repositories';

export default (request, url) => q => request
  .get(url(path))
  .query({q});
