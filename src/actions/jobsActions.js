import { actionCreator } from 'redux-action-creator';
import actionTypes from './actionTypes';

const {
  GET_FEATURED_COMPANIES_REQUEST,
  GET_FEATURED_COMPANIES_SUCCESS,
  GET_FEATURED_COMPANIES_FAILURE,

  GET_SEARCH_PARAMS_REQUEST,
  GET_SEARCH_PARAMS_SUCCESS,
  GET_SEARCH_PARAMS_FAILURE,

  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_FAULURE,
} = actionTypes;

export default {
  getFeaturedCompaniesRequest: actionCreator(GET_FEATURED_COMPANIES_REQUEST, 'location', 'limit'),
  getFeaturedCompaniesSuccess: actionCreator(GET_FEATURED_COMPANIES_SUCCESS, 'companies'),
  getFeaturedCompaniesFailure: actionCreator(GET_FEATURED_COMPANIES_FAILURE, 'error'),

  getSearchParamsRequest: actionCreator(GET_SEARCH_PARAMS_REQUEST),
  getSearchParamsSuccess: actionCreator(GET_SEARCH_PARAMS_SUCCESS, 'params'),
  getSearchParamsFailure: actionCreator(GET_SEARCH_PARAMS_FAILURE, 'error'),

  searchJobsRequest: actionCreator(SEARCH_JOBS_REQUEST, 'params'),
  searchJobsSuccess: actionCreator(SEARCH_JOBS_SUCCESS, 'jobs'),
  searchJobsFailure: actionCreator(SEARCH_JOBS_FAULURE, 'error'),
};
