import faker from 'faker';
import request from 'superagent';
import search, { path } from './index';

it('should call the api', () => {

    const q   = faker.name.firstName(),
          url = jest.fn(p => q);

    search(request, url)(q);

    expect(url).toHaveBeenCalledWith(path);
    expect(request.get).toHaveBeenCalledWith(q);
    expect(request.query).toHaveBeenCalledWith({q});
});
