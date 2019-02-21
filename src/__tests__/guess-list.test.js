import React from 'react';
import { GuessList } from '../components/guess-list';
import { shallow } from 'enzyme';

describe('GuessList', () => {
  it('should render without crashing', () => {
    shallow(<GuessList guesses={[42]} />);
  });
});