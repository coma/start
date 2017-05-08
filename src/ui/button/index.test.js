import React from 'react';
import faker from 'faker';
import { shallow } from 'enzyme';
import Button from './index';

it('should be a button', () => {

    const label  = faker.name.firstName(),
          button = shallow(<Button>{ label }</Button>);

    expect(button.is('button')).toBe(true);
    expect(button.text()).toBe(label);
});

it('should allow setting some props', () => {

    const action = jest.fn(),
          type   = faker.name.firstName(),
          button = shallow(<Button onClick={ action } type={ type } />);

    button.simulate('click');

    expect(action).toHaveBeenCalled();
    expect(button.prop('type')).toBe(type);
});

it('should merge class names', () => {

    const className = faker.name.firstName(),
          button    = shallow(<Button className={ className } />);

    expect(button.prop('className')).toBe(`b-button ${ className }`);
});
