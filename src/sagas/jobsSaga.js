import { fetchFeaturedCompanies, fetchSearchParams, searchJobs } from './api';
import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import jobsActions from '../actions/jobsActions';

const {
  getFeaturedCompaniesSuccess,
  getFeaturedCompaniesFailure,

  getSearchParamsSuccess,
  getSearchParamsFailure,

  searchJobsSuccess,
  searchJobsFailure,
} = jobsActions;
const { GET_FEATURED_COMPANIES_REQUEST, GET_SEARCH_PARAMS_REQUEST, SEARCH_JOBS_REQUEST } = actionTypes;

export function* fetchCompaniesSaga() {
  yield takeLatest(GET_FEATURED_COMPANIES_REQUEST, fetchCompanies);
}

function* fetchCompanies(action) {
  try {
    const res = yield call(fetchFeaturedCompanies, action.payload);
    yield put(getFeaturedCompaniesSuccess(res.body.data));
  } catch (e) {
    yield put(getFeaturedCompaniesFailure(e));
  }
}

export function* searchParamsSaga() {
  yield takeLatest(GET_SEARCH_PARAMS_REQUEST, searchParams);
}

function* searchParams() {
  try {
    const res = yield call(fetchSearchParams);
    yield put(getSearchParamsSuccess(res.body.params));
  } catch (e) {
    yield put(getSearchParamsFailure(e));
  }
}

export function* searchJobsSaga() {
  yield takeLatest(SEARCH_JOBS_REQUEST, callSearchJobs);
}

function* callSearchJobs(action) {
  try {
    const res = yield call(searchJobs, action.payload.params);
    yield put(searchJobsSuccess(res.body));
  } catch (e) {
    yield put(searchJobsFailure(e));
  }
}
