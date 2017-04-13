import actionTypes from '../actions/actionTypes';

const { GET_CURRENT_USER_SUCCESS } = actionTypes;

const currentUser = (state = {}, { type, payload }) => {
  if (type === GET_CURRENT_USER_SUCCESS) {
    return payload.user;
  }

  return state;
};

export default { currentUser };
