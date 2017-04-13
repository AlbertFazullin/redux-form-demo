import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Textarea from '../Textarea';

describe('<Textarea />', () => {
  it('Renders 1 textarea and handles changes', () => {
    const changeSpy = sinon.spy();

    const wrapper = shallow(
      <Textarea
        input={{
          value: 'foo',
          onChange: changeSpy,
          name: 'testTA',
        }}
        placeholder="foobar"
      />
    );
    expect(wrapper.find('textarea')).to.have.length(1);
    wrapper.find('textarea').simulate('change');
    assert(changeSpy.called);
  });
});
