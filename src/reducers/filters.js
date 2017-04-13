import actionTypes from '../actions/actionTypes';

const { TOGGLE_MOBILE_FILTERS } = actionTypes;

const filtersOpen = (state = false, { type }) => {
  if (type === TOGGLE_MOBILE_FILTERS) {
    return !state;
  }

  return state;
};

export default { filtersOpen };
