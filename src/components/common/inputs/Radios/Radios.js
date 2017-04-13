import React, { PropTypes } from 'react';
import s from './radios.pcss';

const Radios = ({ fields, input, defaultChecked }) =>
  <div className={ s.wrapper }>
    <div className={ s.radios }>
      {fields.map(field =>
        <div key={ field.name } className={ s.radioItem } >
          <label>
            <input
              type="radio"
              { ...input }
              value={ field.name }
              checked={ field.label === defaultChecked || input.value === field.name }
            />
            <span className={ s.label }>{ field.label }</span>
          </label>
        </div>
      )}
    </div>
  </div>;

Radios.propTypes = {
  defaultChecked: PropTypes.string,
  fields: PropTypes.array.isRequired,
  input: PropTypes.object,
};

export default Radios;
