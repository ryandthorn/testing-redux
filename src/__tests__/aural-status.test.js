import React from 'react';
import { AuralStatus } from '../components/aural-status';
import { shallow } from 'enzyme';

describe('AuralStatus', () => {
  it('renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('renders an aural status update', () => {
    const wrapper = shallow(
      <AuralStatus auralStatus="test" />
    );
    expect(wrapper.contains("test")).toBe(true);
  });
});