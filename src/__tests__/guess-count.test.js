import React from 'react';
import { GuessCount } from '../components/guess-count';
import { shallow } from 'enzyme';

describe('GuessCount', () => {
  it('should render without crashing', () => {
    shallow(<GuessCount />);
  });
});