import React, { PropTypes } from 'react';
import s from './checkbox.pcss';

const CheckBox = ({ input, fields, defaultChecked }) =>
  <div className={ s.wrapper }>
    <div className={ s.checkBox }>
      {fields.map(field =>
        <div key={ field.name } className={ s.checkboxItem } >
          <label>
            <input
              type="checkbox"
              name={ `${name}[${field.name}]` }
              value={ field.name }
              checked={ field.label === defaultChecked || input.value.includes(field.name) }
              onChange={ function(event) {
                const newValue = input.value ? [...input.value] : [];
                if(event.target.checked) {
                  newValue.push(field.name);
                } else {
                  newValue.splice(newValue.indexOf(field.name), 1);
                }

                return input.onChange(newValue);
              } }
            />
            <span className={ s.checkbox__input }><div className={ s.icon }/></span>
            <span className={ s.checkbox__label }>{ field.label }</span>
          </label>
        </div>
      )}
    </div>
  </div>;

CheckBox.propTypes = {
  defaultChecked: PropTypes.string,
  fields: PropTypes.array.isRequired,
  input: PropTypes.object,
};

export default CheckBox;
