import React from 'react';
import { Feedback } from '../components/feedback';
import { shallow } from 'enzyme';

describe('Feedback', () => {
  it('should render without crashing', () => {
    shallow(<Feedback />);
  });

  it('renders feedback', () => {
    let TEST_FEEDBACK = 'test';
    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
  });
});