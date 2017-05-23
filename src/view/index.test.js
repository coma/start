import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';
import Result from './result';
import View from './index';

it('should be a view', () => {

    const view = shallow(<View />);

    expect(view.is('div.view')).toBe(true);
    expect(view.find(Search).length).toBe(1);
    expect(view.find(Result).length).toBe(1);
});
