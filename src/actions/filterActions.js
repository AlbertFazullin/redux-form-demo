import { actionCreator } from 'redux-action-creator';
import actionTypes from './actionTypes';

const { TOGGLE_MOBILE_FILTERS } = actionTypes;

export default {
  toggleMobileFilters: actionCreator(TOGGLE_MOBILE_FILTERS),
};
