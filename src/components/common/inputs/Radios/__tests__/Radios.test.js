import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Radios from '../Radios';

const _onChange = e => {};

describe('<Radios />', () => {
  it('Renders 1 .radios with 2 checkbox inputs', () => {
    const wrapper = shallow(
      <Radios
        input={{
          value: '',
          name: 'testBox',
          onChange: _onChange,
        }}
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
      />
    );
    expect(wrapper.find('.radios')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it('Renders 1 .radios with 2 checkbox inputs with 1st default checked', () => {
    const wrapper = shallow(
      <Radios
        input={{
          value: '',
          name: 'testBox',
          onChange: _onChange,
        }}
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        defaultChecked="foo"
      />
    );
    expect(wrapper.find('.radios')).to.have.length(1);
    expect(wrapper.find('input').first().props().checked).to.be.true;
  });

  it('Renders 1 .radios with 2 checkbox inputs with 2nd default checked', () => {
    const wrapper = shallow(
      <Radios
        input={{
          value: '',
          name: 'testBox',
          onChange: _onChange,
        }}
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
        defaultChecked="bar"
      />
    );
    expect(wrapper.find('.radios')).to.have.length(1);
    expect(wrapper.find('input').last().props().checked).to.be.true;
  });

  it('Renders 1 .radios with 2 checkbox inputs with 2nd default checked then clicks to 1', () => {
    const changeSpy = sinon.spy();
    const wrapper = shallow(
      <Radios
        input={{
          value: '',
          name: 'testBox',
          onChange: changeSpy,
        }}
        fields={ [{ name: 'foo', label: 'foo' }, { name: 'bar', label: 'bar' }] }
      />
    );
    wrapper.find('input').first().simulate('change');
    assert(changeSpy.called);
  });
});
