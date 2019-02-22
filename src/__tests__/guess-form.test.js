import React from 'react';
import { GuessForm } from '../components/guess-form';
import { makeGuess } from '../actions';
import { shallow, mount } from 'enzyme';

describe('GuessForm', () => {
  it('should render without crashing', () => {
    shallow(<GuessForm />);
  });

  it('should dispatch makeGuess from form submission', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '10';
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it('should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={() => { }} />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 42;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});