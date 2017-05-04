import getUser from './api';
import { put, takeLatest, call } from 'redux-saga/effects';
import actionTypes from '../redux/actionTypes';
import { userActions } from '../redux/userDuck';

const {
  getUserSuccess,
  getUserFailure,
} = userActions;
const { GET_USER_REQUEST } = actionTypes;

export default function* () {
  yield takeLatest(GET_USER_REQUEST, callGetUser);
}

function* callGetUser() {
  try {
    const res = yield call(getUser);
    yield put(getUserSuccess(res.body));
  } catch (e) {
    yield put(getUserFailure(e));
  }
}

