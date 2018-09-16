// @flow strict
import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../Routes';

describe('#Routes', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
