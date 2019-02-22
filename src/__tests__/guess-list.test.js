import React from 'react';
import { GuessList } from '../components/guess-list';
import { shallow } from 'enzyme';

describe('GuessList', () => {
  it('should render without crashing', () => {
    shallow(<GuessList guesses={[42]} />);
  });

  it('should render a <li> for each stored guess', () => {
    const wrapper = shallow(<GuessList guesses={[1, 2, 3]} />);
    const guessList = wrapper.find('#guessList');
    expect(guessList.children().length).toEqual(3);
  });
});