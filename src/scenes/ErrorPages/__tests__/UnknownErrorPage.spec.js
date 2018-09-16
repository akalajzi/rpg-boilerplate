// @flow strict

import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import UnknownErrorPage from '../UnknownErrorPage';

describe('#UnknownErrorPage', () => {
  test('render', () => {
    const component = renderer.create(
      <Router>
        <UnknownErrorPage />
      </Router>,
    );

    expect(component).toMatchSnapshot();
  });

  test('should render passed title and description', () => {
    const component = mount(
      <Router>
        <UnknownErrorPage title="Title" description="Description" />
      </Router>,
    );

    expect(component.find('UnknownErrorPage__Title').contains('Title')).toBe(true);
    expect(component.find('UnknownErrorPage__Description').contains('Description')).toBe(true);
  });
});
