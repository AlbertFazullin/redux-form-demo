import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Input from '../common/inputs/Input/Input';
import CheckBox from '../common/inputs/CheckBox/CheckBox';
import Radios from '../common/inputs/Radios/Radios';
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
          name="text_input"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Checbox group 1
        </h4>
        <Field
          component={ CheckBox }
          fields={ [
            { name: 'foo', label: 'foo' },
            { name: 'bar', label: 'bar' },
          ] }
          name="cb_group1"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          CheckBox group 2
        </h4>
        <Field
          component={ CheckBox }
          fields={ [
            { name: 'foo1', label: 'foo1' },
            { name: 'bar2', label: 'bar2' },
            { name: 'chai', label: 'chai' },
            { name: 'pivo', label: 'pivo' },
            { name: 'vape', label: 'vape' },
          ] }
          name="cb_group2"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Radio
        </h4>
        <Field
          component={ Radios }
          fields={ [
            { name: 'oldest', label: 'Oldest' },
            { name: 'newest', label: 'Newest' },
            { name: 'eta', label: 'ETA' },
          ] }
          name="sort_by"
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
  form: 'filter',
  initialValues: {
    sort_by: 'newest',
    cb_group2: ['pivo'],
  },
})(Filter);
