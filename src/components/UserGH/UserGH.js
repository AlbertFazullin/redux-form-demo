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

const validate = ({ username }) => {
  const errors = {};
  if (!username) {
    errors.username = 'Required';
  } else if (username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  return errors;
};

const UserGH = ({ reset, handleSubmit }) =>
  <div styleName="wrapper">
    <form onSubmit={ handleSubmit }>
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
        <button type="submit" styleName="button button-signin success">
          Submit
        </button>
        <button
          type="button"
          onClick={ reset }
          styleName="button button-signin ghost-success"
        >
          Reset
        </button>
      </div>
    </form>
  </div>;

UserGH.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
};

const styledUserGH = CSSModules(UserGH, { ...s, ...bs }, { allowMultiple: true });

export default reduxForm({
  form: 'getGhUser',
  validate,
})(styledUserGH);
