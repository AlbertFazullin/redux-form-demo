import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Select from '../Select';

const options = [
  { value: 'All Industries', label: 'All Industries' },
  { value: 'Accounting & Auditing', label: 'Accounting & Auditing' },
  { value: 'Agriculture', label: 'Agriculture' },
  { value: 'Airlines / Aviation', label: 'Airlines / Aviation' },
  { value: 'Alternative Medicine', label: 'Alternative Medicine' },
  { value: 'Animation', label: 'Animation' },
  { value: 'Apparel & Fashion', label: 'Apparel & Fashion' },
  { value: 'Architecture & Planning', label: 'Architecture & Planning' },
  { value: 'Arts & Crafts', label: 'Arts & Crafts' },
  { value: 'Automotive', label: 'Automotive' },
  { value: 'Aviation & Aerospace', label: 'Aviation & Aerospace' },
  { value: 'Banking', label: 'Banking' },
];

const _onChange = e => {};

describe('<Select />', () => {
  it('Renders 1 .filterSelect without .filterDropDown', () => {
    const wrapper = mount(
      <Select
        input={{
          onChange: _onChange,
          name: 'foo',
        }}
        placeholder="Placeholder"
        options={ options }
        multi={ true }
      />
    );
    expect(wrapper.find('.filterSelect')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('.filterDropDown')).to.have.length(0);
  });

  it('Renders 1 .filterSelect with 1 .filterDropDown when clicked', () => {
    const wrapper = mount(
      <Select
        input={{
          onChange: _onChange,
          name: 'foo',
        }}
        placeholder="Placeholder"
        options={ options }
        multi={ true }
      />
    );
    wrapper.find('input').first().simulate('click');
    expect(wrapper.find('.filterSelect')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('.filterDropDown')).to.have.length(1);
  });

  it('Renders 1 .filterSelect without .filterDropDown when checked twice', () => {
    const wrapper = mount(
      <Select
        input={{
          onChange: _onChange,
          name: 'foo',
        }}
        placeholder="Placeholder"
        options={ options }
        multi={ true }
      />
    );
    wrapper.find('input').first().simulate('click');
    wrapper.find('input').first().simulate('click');
    expect(wrapper.find('.filterSelect')).to.have.length(1);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('.filterDropDown')).to.have.length(0);
  });
});
