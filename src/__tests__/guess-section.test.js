import React from 'react';
import GuessSection from '../components/guess-section';
import { shallow } from 'enzyme';

describe('GuessSection', () => {
  it('should render without crashing', () => {
    shallow(<GuessSection />);
  });
});