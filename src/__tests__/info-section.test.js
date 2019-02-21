import React from 'react';
import InfoSection from '../components/info-section';
import { shallow } from 'enzyme';

describe('InfoSection', () => {
  it('should render without crashing', () => {
    shallow(<InfoSection />);
  });
});