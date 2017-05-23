import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import Input from './index';

it('should be an input', () => {

    const input = shallow(<Input />);

    expect(input.is('input')).toBe(true);
});

it('should allow setting some props', () => {

    const action = jest.fn(),
          type   = faker.name.firstName(),
          value  = faker.name.firstName(),
          input  = shallow(<Input onChange={ action } type={ type } value={ value } />);

    input.simulate('change');

    expect(action).toHaveBeenCalled();
    expect(input.prop('type')).toBe(type);
    expect(input.prop('value')).toBe(value);
});

it('should merge class names', () => {

    const className = faker.name.firstName(),
          input     = shallow(<Input className={ className } />);

    expect(input.prop('className')).toBe(`input ${ className }`);
});
