/**
 * Crafted by x22a on 04.05.17.
 */
import { createRoutine } from 'redux-saga-routines';

export const routine = createRoutine('GET_USER');

const { SUCCESS, FAILURE } = routine;

const ghUser = (state = null, { type, payload }) => {
  switch (type) {
  case SUCCESS:
    return payload;
  case FAILURE:
    return null;
  default:
    return state;
  }
};

export default { ghUser };
