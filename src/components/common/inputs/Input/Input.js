import React, { PropTypes } from 'react';
import s from './input.pcss';

const Input = ({ input, placeholder, type }) =>
  <div>
    <input
      type={ type }
      { ...input }
      placeholder={ placeholder }
      className={ s.filterInput }
    />
  </div>;

Input.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
