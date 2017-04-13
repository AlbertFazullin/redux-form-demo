import React from 'react';
import PropTypes from 'prop-types';
import s from './textarea.pcss';

const Textarea = ({ input, placeholder, limit }) =>
  <div>
    <label className={ s.wrapper }>
      <div className={ s.header }>
        <div className={ s.label }>Textarea</div>
        {limit &&
          <div className={ input && input.value.length < limit ? s.counter : s['counter-exhausted'] }>
            { input ? input.value.length : 0 }/{ limit } characters
          </div>
        }
      </div>
      <textarea
        rows={ 10 }
        { ...input }
        placeholder={ placeholder }
        className={ input && input.value.length < limit ? s.textarea : s['textarea-exhausted'] }
      />
    </label>
  </div>;

Textarea.propTypes = {
  input: PropTypes.object,
  limit: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
