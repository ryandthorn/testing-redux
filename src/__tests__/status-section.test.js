import React from 'react';
import StatusSection from '../components/status-section';
import { shallow } from 'enzyme';

describe('StatusSection', () => {
  it('should render without crashing', () => {
    shallow(<StatusSection />);
  });
});