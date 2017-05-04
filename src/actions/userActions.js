import { actionCreator } from 'redux-action-creator';
import actionTypes from '../redux/actionTypes';

const {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,

  CHANGE_LOCALE,
} = actionTypes;

export default {
  getCurrentUserRequest: actionCreator(GET_CURRENT_USER_REQUEST),
  getCurrentUserSuccess: actionCreator(GET_CURRENT_USER_SUCCESS, 'user'),
  getCurrentUserFailure: actionCreator(GET_CURRENT_USER_FAILURE, 'error'),

  changeLocale: actionCreator(CHANGE_LOCALE, 'locale'),
};
