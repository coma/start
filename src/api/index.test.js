import api, { root, url } from './index';

it('should concatenate the path without extra slashes', () => {

    const expected = `${ root }/pepe`;

    expect(url('pepe')).toBe(expected);
    expect(url('/pepe')).toBe(expected);
});

it('should export the endpoints', () => {

    expect(api.search).toBeInstanceOf(Function);
});
