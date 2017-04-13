import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Input from '../common/inputs/Input/Input';
import s from './filter.pcss';

import submit from './submit';

const Filter = ({ reset, handleSubmit }) =>
  <div className={ s.wrapper }>
    <form onSubmit={ handleSubmit(submit) }>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Simple text input
        </h4>
        <Field
          component={ Input }
          type="text"
          placeholder="Placeholder"
          name="text input"
        />
      </div>
      <div className={ s.filterBottom }>
        <button type="submit" className={ s.btnApply }>
          Submit
        </button>
        <button
          type="button"
          onClick={ reset }
          className={ s.btnReset }
        >
          Reset
        </button>
      </div>
    </form>
  </div>;

Filter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'filter-1',
})(Filter);
