import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Input from '../Input';

describe('<Input />', () => {
  it('Renders 1 input and handles changes', () => {
    const changeSpy = sinon.spy();

    const wrapper = shallow(
      <Input input={{
        value: 'foo',
        onChange: changeSpy,
        name: 'testInput',
      }}
      />
    );
    expect(wrapper.find('input')).to.have.length(1);
    wrapper.find('input').simulate('change');
    assert(changeSpy.called);
  });
});
