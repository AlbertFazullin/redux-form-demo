/**
 * Crafted by x22a on 05.05.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import { Field, reduxForm } from 'redux-form';

import Input from '../common/inputs/Input/Input';
import bs from '../common/button.pcss';
import s from './userGH.pcss';

import { routine } from '../../redux/userDuck';

const validate = ({ username }) => {
  const errors = {};
  if (!username) {
    errors.username = 'Required';
  } else if (username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  return errors;
};

const UserGH = ({ reset, handleSubmit, pristine, submitting, invalid }) =>
  <div styleName="wrapper">
    <form onSubmit={ handleSubmit(routine) }>
      <div styleName="item">
        <h4 styleName="title">
          Github Username
        </h4>
        <Field
          component={ Input }
          type="text"
          placeholder="John Doe"
          name="username"
        />
      </div>
      <div styleName="bottom">
        <button
          type="submit"
          styleName="button button-signin success"
          disabled={ pristine || submitting || invalid }
        >
          Submit
        </button>
        <button
          type="button"
          onClick={ reset }
          styleName="button button-signin ghost-success"
          disabled={ pristine || submitting }
        >
          Reset
        </button>
      </div>
    </form>
  </div>;

UserGH.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

const styledUserGH = CSSModules(UserGH, { ...s, ...bs }, { allowMultiple: true });

export default reduxForm({
  form: 'getGhUser',
  validate,
})(styledUserGH);
