import { getCurrentUser, changeLocale } from './api';
import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';
import userActions from '../actions/userActions';

const {
  getCurrentUserSuccess,
  getCurrentUserFailure,
} = userActions;
const { GET_CURRENT_USER_REQUEST, CHANGE_LOCALE } = actionTypes;

export function* getUserSaga() {
  yield takeLatest(GET_CURRENT_USER_REQUEST, getUser);
}

function* getUser() {
  try {
    const res = yield call(getCurrentUser);
    yield put(getCurrentUserSuccess(res.body.data));
  } catch (e) {
    yield put(getCurrentUserFailure(e));
  }
}

export function* changeLocaleSaga() {
  yield takeLatest(CHANGE_LOCALE, callChangeLocale);
}

function* callChangeLocale(action) {
  yield call(changeLocale, action.payload.locale);
  yield window.location.reload(true);
}
