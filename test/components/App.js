// for testing see:
// http://airbnb.io/enzyme/
// https://redux.js.org/docs/recipes/WritingTests.html
// https://mochajs.org/
// https://github.com/reactjs/redux/issues/1534

import React from 'react';
import { expect } from 'chai';
import { App } from '../../src/components/App';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<App />' , () => {
  let component;


  it('is rendered correctly', () => {

    const props = {count: 5, fireabaseAvailableFeatures: ['auth', 'database']};
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find('.wrapper')).to.have.length(1);
    expect(wrapper.find('p.availableFeatures').text()).to.be.equal('auth, database');
    expect(wrapper.find('h2.countHeader').text()).to.be.equal('Current Count: 5');

    expect(wrapper.find('button.incrementBtn').text()).to.be.equal('Increment count');

  });

  it('button triggers action', () => {
    const onButtonClick = sinon.spy();
    const props = {
      count: 5,
      fireabaseAvailableFeatures: ['auth', 'database'],
      incrementCount: onButtonClick
    };

    const wrapper = shallow(<App {...props}/>);
    wrapper.find('button.incrementBtn').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);

  });
});
