import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';

import Input from '../common/inputs/Input/Input';
import Textarea from '../common/inputs/Textarea/Textarea';
import s from './profileEdit.pcss';

import submit from './submit';

const ProfileEdit = ({ reset, handleSubmit }) =>
  <div className={ s.wrapper }>
    <form onSubmit={ handleSubmit(submit) }>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Username
        </h4>
        <Field
          component={ Input }
          type="text"
          placeholder="John Doe"
          name="username"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          Password
        </h4>
        <Field
          component={ Input }
          type="password"
          placeholder="123456"
          name="password"
        />
      </div>
      <div className={ s.filterItem }>
        <h4 className={ s.filterTitle }>
          About
        </h4>
        <Field
          component={ Textarea }
          placeholder="About"
          name="about"
          limit={ 1000 }
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

ProfileEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profileEdit',
})(ProfileEdit);
