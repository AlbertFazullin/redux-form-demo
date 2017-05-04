/**
 * Crafted by x22a on 04.05.17.
 */
import { createActions } from 'redux-actions';
import types from './actionTypes';

const { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } = types;

export const userActions = createActions(GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE);

const ghUser = (state = null, { type, payload }) => {
  switch (type) {
  case GET_USER_SUCCESS:
    return payload;
  case GET_USER_FAILURE:
    return null;
  default:
    return state;
  }
};

export default { ghUser };
