import React from 'react';
import { GuessCount } from '../components/guess-count';
import { shallow } from 'enzyme';

describe('GuessCount', () => {
  it('should render without crashing', () => {
    shallow(<GuessCount />);
  });

  it('should render the correct guess count', () => {
    const guessCount = 3;
    const wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
  });
});