import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import Input from 'src/ui/input';
import Button from 'src/ui/button';
import { Search } from './index';

it('should be a form', () => {

    const search = shallow(<Search />);

    expect(search.is('form.b-search')).toBe(true);
    expect(search.find(Input).length).toBe(1);
    expect(search.find(Button).length).toBe(1);
});

it('should pass the name to the input', () => {

    const name   = faker.name.firstName(),
          search = shallow(<Search />);

    search.setState({name});

    expect(search.find(Input).prop('value')).toBe(name);
});
