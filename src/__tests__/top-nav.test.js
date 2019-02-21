import React from 'react';
import { TopNav } from '../components/top-nav';
import { shallow } from 'enzyme';

describe('TopNav', () => {
  it('should render without crashing', () => {
    shallow(<TopNav />);
  });
});