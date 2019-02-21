import React from 'react';
import { Feedback } from '../components/feedback';
import { shallow } from 'enzyme';

describe('Feedback', () => {
  it('should render without crashing', () => {
    shallow(<Feedback />);
  });
});