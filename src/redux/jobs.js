import actionTypes from './actionTypes';

const { SEARCH_JOBS_SUCCESS } = actionTypes;

const searchResult = (state = [], { type, payload }) => {
  if (type === SEARCH_JOBS_SUCCESS) {
    return payload.jobs;
  }

  return state;
};

export default { searchResult };
