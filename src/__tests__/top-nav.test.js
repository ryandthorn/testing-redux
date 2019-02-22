import React from 'react';
import { TopNav } from '../components/top-nav';
import { shallow } from 'enzyme';
import { RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

describe('TopNav', () => {
  it('should render without crashing', () => {
    shallow(<TopNav />);
  });

  it('should dispatch restartGame when "New Game" is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const newGame = wrapper.find('.new');
    newGame.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
  });

  it('should dispatch generateAuralUpdate when "Hear state of game" is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const generateUpdate = wrapper.find('.status-link');
    generateUpdate.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});