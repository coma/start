import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

it('should be a spinner', () => {

    const spinner = shallow(<Spinner />);

    expect(spinner.is('div.spinner')).toBe(true);
    expect(spinner.children().length).toBe(5);
});
