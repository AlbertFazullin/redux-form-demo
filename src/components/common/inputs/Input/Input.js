import React from 'react';
import PropTypes from 'prop-types';
import s from './input.pcss';

const Input = ({ input, placeholder, type, meta: { touched, error } = {}}) =>
  <div>
    <input
      type={ type }
      { ...input }
      placeholder={ placeholder }
      className={ touched && error ? s['input-error'] : s.input }
    />
    {touched && error &&
      <div className={ s.error }>{ error }</div>
    }
  </div>;

Input.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
