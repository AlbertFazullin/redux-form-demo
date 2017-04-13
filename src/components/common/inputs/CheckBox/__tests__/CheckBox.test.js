import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CheckBox from '../CheckBox';

const _onChange = e => {};

describe('<CheckBox />', () => {
  it('Renders 1 .checkBox with 2 checkbox inputs', () => {
    const wrapper = shallow(
      <CheckBox
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        input={{
          value: [],
          onChange: _onChange,
          name: 'testBox',
        }}
      />
    );
    expect(wrapper.find('.checkBox')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('Renders 1 .checkBox with 2 checkbox inputs with 1st default checked', () => {
    const wrapper = shallow(
      <CheckBox
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        defaultChecked="foo"
        input={{
          value: [],
          onChange: _onChange,
          name: 'testBox',
        }}
      />
    );
    expect(wrapper.find('.checkBox')).to.have.length(1);
    expect(wrapper.find('input').first().props().checked).to.be.true;
  });

  it('Renders 1 .checkBox with 2 checkbox inputs with 2nd default checked', () => {
    const wrapper = shallow(
      <CheckBox
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        defaultChecked="bar"
        input={{
          value: [],
          onChange: _onChange,
          name: 'testBox',
        }}
      />
    );
    expect(wrapper.find('.checkBox')).to.have.length(1);
    expect(wrapper.find('input').last().props().checked).to.be.true;
  });

  it('Renders 1 .checkBox with 2 checkbox inputs with 2nd default checked then clicks to 1', () => {
    const changeSpy = sinon.spy();
    const wrapper = shallow(
      <CheckBox
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        input={{
          value: [],
          onChange: changeSpy,
          name: 'testBox',
        }}
      />
    );
    wrapper.find('input').first().simulate('change', { target: { checked: true }});
    assert(changeSpy.called);
  });
});
